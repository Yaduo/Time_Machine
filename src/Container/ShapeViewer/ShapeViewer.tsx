import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { isDark } from "../../Components/Picker/ColorPicker";
import { ShapeViewerAction } from './Actions'

type States = { 
    isDragging: boolean
    orig: any
}

export type ContextProps = { }

export type ConnectedState = {
    shapes: AppStore.Shape[]
}

export type ConnectedDispatch = { 
    updateShape: (id: number, top: number, left: number) => void
}

type Props = ConnectedState & ConnectedDispatch & ContextProps;

class ShapeViewerComponent extends React.Component<Props, States> {
    
    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = { isDragging: false, orig: {x: 0, y: 0}};
    }

    render() {
        const { shapes } = this.props;
        return (
            <div className="noselect" style={{ position: "relative", border: "solid 1px #ccc", width: 860, height: 500 }}>
                { shapes.map((shape: AppStore.Shape) => (
                    <div key={shape.id} style={{
                            position: "absolute", 
                            top: shape.top, 
                            left: shape.left, 
                            color: isDark(shape.color) ? '#fff' : '#000',
                            background: shape.color, 
                            width: shape.width, 
                            height: shape.height,
                            lineHeight: shape.height + "px", textAlign: "center", cursor: "move"
                        }}
                        onMouseDown = { e => this.handleDragInit(e) }
                        onMouseUp = { e => this.setState({ isDragging: false, orig: this.state.orig} ) }
                        onMouseOut ={ e => this.setState({ isDragging: false, orig: this.state.orig }) }
                        onMouseMove = { e => this.handleDrag(shape.id, shape.height, shape.width, e) }>
                        ({shape.top}, {shape.left})
                    </div>)
                ) }
            </div>
        );
    }

    handleDragInit(e: React.MouseEvent<HTMLDivElement>) {
        let el = e.target as HTMLElement;
        while (el.nodeName !== "DIV")
            el = el.parentNode as HTMLElement; //don't select text SPAN node
        const top = parseInt(el.style.top) || 0;
        const left = parseInt(el.style.left) || 0;
        this.setState({ 
            isDragging: true, 
            orig: { x: e.pageX - left, y: e.pageY - top } 
        });
    }

    handleDrag(id: number, height: number, width:number, e:React.MouseEvent<HTMLDivElement>) {
        if (this.state.isDragging) {
            this.props.updateShape(id, e.pageY - this.state.orig.y, e.pageX - this.state.orig.x);
        }
    }
}

const mapStateToProps = (state:AppStore.State) => {
    return {
        shapes: state.shapes
    } as ConnectedState
} 

const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    updateShape: (id: number, top: number, left: number) => {
        dispatch(ShapeViewerAction.updateShape(id, top, left));
    }
}); 

export const ShapeViewer = connect(mapStateToProps, mapDispatchToProps)(ShapeViewerComponent) as React.ComponentClass<ContextProps>