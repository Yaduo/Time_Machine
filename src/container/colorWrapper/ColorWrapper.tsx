import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ColorPicker } from "../../components/picker/ColorPicker";
import { AppState } from 'store'
import { ColorWrapperAction } from './Actions'

type States = {}

export type ContextProps = { }

export type ConnectedState = {
    colorHex: string 
}

export type ConnectedDispatch = {
    setColor(colorHex: string): void
}

type Props = ConnectedState & ConnectedDispatch & ContextProps;

class ColorWrapperComponent extends React.Component<Props, States> {
    render() {
        const {colorHex, setColor} = this.props
        return <ColorPicker color={ colorHex } onChange={ setColor } />;
    }
}

/*
 * exportable 
 * connect Component with sotre and actions
 */
const mapStateToProps = (state: AppState) => {
    return {
        colorHex: state.colorHex
    } as ConnectedState
} 

const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    setColor: (colorHex: string) => {
        dispatch(ColorWrapperAction.colorChange(colorHex));
    }
}); 

export const ColorWrapper = connect(mapStateToProps, mapDispatchToProps)(ColorWrapperComponent) as React.ComponentClass<ContextProps>
