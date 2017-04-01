import * as React from 'react';
import { NumberPicker } from './NumberPicker'
import './ColorPickerStyle.less';

type RGBColor = {
    red: number; 
    green: number; 
    blue: number;
}

type States = {}

export type ContextProps = {
    color: string
    onChange(color: string): void
}

export const isDark = (color: string) => luminance(color) < 100;

export class ColorPicker extends React.Component<ContextProps, States> {
    render() {
        
        const { color } = this.props;
        const rgb = hexToRgb(color);
        const textColor = isDark(color) ? '#fff' : '#000';

        return (
            <div>
                <NumberPicker name="Red" value={rgb.red} onChange={ (value: number) => this.updateRed(value)} />
                <NumberPicker name="Green" value={rgb.green} onChange={ (value: number) => this.updateGreen(value) } />
                <NumberPicker name="Blue" value={rgb.blue} onChange={ (value: number) => this.updateBlue(value) } />
                <div className="color-picker-previewer" style={{ background: color, color: textColor }}>
                    {color}
                </div>
            </div>
        );
    }

    updateRed(red: number) {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(red, rgb.green, rgb.blue));
    }
    
    updateGreen(green: number) {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(rgb.red, green, rgb.blue));
    }
    
    updateBlue(blue: number) {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(rgb.red, rgb.green, blue));
    }
    
    changeColor(color: string) {
        this.props.onChange(color);
    }
}

const componentToHex = (num: number) => {
    const hex = num.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r:number, g:number, b:number) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

const hexToRgb = (hex: string): RGBColor => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
    } : null;
};

const luminance = (color: string) => {
    const rgb = hexToRgb(color);
    return 0.2126 * rgb.red + 0.7152 * rgb.green + 0.0722 * rgb.blue;
};
