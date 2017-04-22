import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ColorPicker } from "../../Components/Picker/ColorPicker";
import { colorWrapperColorChangeAction } from './Actions'

type States = {}

export type ContextProps = { }

export type ConnectedState = {
    color: string 
    
}

export type ConnectedDispatch = {
    setColor(color: string): void
}

type Props = ConnectedState & ConnectedDispatch & ContextProps;

class ColorWrapperComponent extends React.Component<Props, States> {
    render() {
        const {color, setColor} = this.props
        return <ColorPicker color={ color } onChange={ setColor } />;
    }
}

/*
 * exportable 
 * connect Component with sotre and actions
 */
const mapStateToProps = (state: AppStore.State) => {
    return {
        color: state.color
    } as ConnectedState
} 

const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    setColor: (color: string) => {
        dispatch(colorWrapperColorChangeAction(color));
    }
}); 

export const ColorWrapper = connect(mapStateToProps, mapDispatchToProps)(ColorWrapperComponent) as React.ComponentClass<ContextProps>
