import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { isDark } from "../../Components/Picker/ColorPicker";
import { shapeMakerAddShapeAction } from './Actions'

type States = {
    top:number,
    left:number
}

export type ContextProps = { }

export type ConnectedState = {
    width: number, 
    height: number, 
    color: string,
    top: number, 
    left: number
}

export type ConnectedDispatch = {
    add(color:string, height:number, width:number, top:number, left:number): void
}

type Props = ConnectedState & ConnectedDispatch & ContextProps;

class ShapeMakerComponent extends React.Component<Props, States> {

    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = { top: props.top, left: props.left };
        
    }

    render() {
        const { width, height, top, left } = this.props
        const background = this.props.color;
        const color = isDark(background) ? '#fff' : '#000';
        return (
            <div>
                <p>
                    <label>size: </label>
                    <b>{height}x{width}</b>
                </p>
                <div style={{ height, width, background, color, lineHeight: height + "px", margin: "auto" }}>
                    ({this.state.top}, {this.state.left})
                </div>
                <div>
                    <p>
                        <label>position: </label>
                        <input style={{ width: 30 }} defaultValue={top.toString()} onChange={e => this.handleTop(e) } />
                        <span>, </span>
                        <input style={{ width: 30 }} defaultValue={left.toString()} onChange={e => this.handleLeft(e) } />
                    </p>

                    <button onClick={e => this.props.add(background, height, width, this.state.top, this.state.left) }>
                        Add Shape
                    </button>
                </div>
            </div>
        );
    }
    handleTop(e: React.FormEvent<HTMLInputElement>) {
        const top = parseInt(e.currentTarget.value);
        if (!isNaN(top))
            this.setState({ 
                top: top,
                left: this.state.left
            });
    }
    handleLeft(e: React.FormEvent<HTMLInputElement>) {
        const left = parseInt(e.currentTarget.value);
        if (!isNaN(left))
            this.setState({ 
                top: this.state.top,
                left 
            });
    }
}

/*
 * exportable 
 * connect Component with sotre and actions
 */
const mapStateToProps = (state:AppStore.State) => {
    return {
        width: state.aspectRatio.width, 
        height: state.aspectRatio.height, 
        color: state.color,
        top: state.nextShapeId * 10, 
        left: state.nextShapeId * 10 
    } as ConnectedState
} 

const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    add: (color:string, height:number, width:number, top:number, left:number) => {
        dispatch(shapeMakerAddShapeAction(color, height, width, top, left));
    }
}); 

export const ShapeMaker = connect(mapStateToProps, mapDispatchToProps)(ShapeMakerComponent) as React.ComponentClass<ContextProps>

