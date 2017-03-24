import './AspectRatioStyle.less';
import * as React from 'react';
import { connect } from 'react-redux';
import { AspectRatioAction } from "./AspectRatioActions";  
import { AspectRatioState } from './AspectRatioReducer' 
//import { Counter } from '../counter/Counter'

interface States {}

interface ContextProps {
  helloFromParentCompoment: string,
  label: string
}

interface ConnectedState {
  aspectRatio: AspectRatioState 
}

interface ConnectedDispatch {
  incrHeight: () => void
  decrHeight: () => void
  decrWidth: () => void
  incrWidth: () => void
}

type Props = ConnectedState  & ConnectedDispatch & ContextProps;

/*
 * AspectRatio Component
 */
class AspectRatioComponent extends React.Component<Props, States> {
    render() {
        return (
            <div className="aspect-ratio">
                <div>
                    <label>AspectRatioProps: { this.props.label} { this.props.helloFromParentCompoment} </label>
                    <div>height: {this.props.aspectRatio.height}</div>
                    <div>width: {this.props.aspectRatio.width}</div>
                </div>
                <button onClick={e => this.props.incrHeight()}>INCREMENT width</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.decrHeight()}>DECREMENT width</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.incrWidth()}>INCREMENT width</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.decrWidth()}>DECREMENT width</button>
            </div>
        );
    }
}

const mapStateToProps = (state: ConnectedState) => state;

const mapDispatchToProps = (dispatch: any) => ({
    incrHeight: () => {
        dispatch(AspectRatioAction.incrHeight(1));
    },
    decrHeight: () => {
        dispatch(AspectRatioAction.decrHeight(1));
    },
    decrWidth: () => {
        dispatch(AspectRatioAction.decrWidth(1));
    },
    incrWidth: () => {
        dispatch(AspectRatioAction.incrWidth(1));
    }
} as ConnectedDispatch); // define the dispatch type

export const AspectRatio = connect(mapStateToProps, mapDispatchToProps)(AspectRatioComponent) as React.ComponentClass<ContextProps>
