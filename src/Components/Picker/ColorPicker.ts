import * as React from 'react';
import { NumberPicker } from './NumberPicker'
import './ColorPickerStyle.less';

type States = {}

export type ContextProps = {
    color: string
    onChange(c:any): void
}

export const isDark = (color: string) => luminance(color) < 100;

export class ColorPicker extends React.Component<ContextProps, States> {
    render() {
        const { color } = this.props;
        const rgb = hexToRgb(color);
        const textColor = isDark(color) ? '#fff' : '#000';
        return (
            <div>
                <NumberPicker name="Red" value={rgb.r} onChange={ (n: any) => this.updateRed(n)} />
                <NumberPicker name="Green" value={rgb.g} onChange={ (n: any) => this.updateGreen(n) } />
                <NumberPicker name="Blue" value={rgb.b} onChange={ (n: any) => this.updateBlue(n) } />
                <div className="color-picker-previewer" style={{ background: color, color: textColor }}>
                    {color}
                </div>
            </div>
        );
    }
    updateRed(n: number) {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(n, rgb.g, rgb.b));
    }
    updateGreen(n: number) {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(rgb.r, n, rgb.b));
    }
    updateBlue(n: number) {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(rgb.r, rgb.g, n));
    }
    changeColor(color: string) {
        this.props.onChange(color);
    }
}

const componentToHex = (c:any) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r:any, g:any, b:any) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

const hexToRgb = (hex: string): { r: number; g: number; b: number; } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

const luminance = (color: string) => {
    const rgb = hexToRgb(color);
    return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
};
