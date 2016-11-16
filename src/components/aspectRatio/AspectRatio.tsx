import './AspectRatioStyle.less';
import * as React from 'react';
import { connect } from 'react-redux';
import { AspectRatioAction } from "./AspectRatioActions";  
import { AspectRatioState } from './AspectRatioReducer' 
//import { Counter } from '../counter/Counter'
  
/**
 * the current Component State (not store state) definition 
*/ 
interface States {}

/**
 * the htmlAttributes in Component Porps
*/ 
interface ContextProps {
  helloFromParentCompoment: string,
  label: string
}

/**
 * the Store state (sub-state) connnected by using Component Porps 
*/ 
interface ConnectedState {
  aspectRatio: AspectRatioState 
}
const mapStateToProps = (state: ConnectedState) => state;

/**
 * the Porps which will be used in Component to defind the Dispatches
*/
interface ConnectedDispatch {
  incrHeight: () => void
  decrHeight: () => void
  decrWidth: () => void
  incrWidth: () => void
}
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

/**
 * combine the the Store sub-state, Store dispatchs and Context Props in to Component Props
*/
type Props = ConnectedState  & ConnectedDispatch & ContextProps;

/*
 * AspectRatio Component
 */
class AspectRatioComponent extends React.Component<Props, States> {
    render() {
        return (
            <div className="aspect-ratio">
                <p>
                    <label>AspectRatioProps: { this.props.label} { this.props.helloFromParentCompoment} </label>
                    <div>height: {this.props.aspectRatio.height}</div>
                    <div>width: {this.props.aspectRatio.width}</div>
                </p>
                <button onClick={e => this.props.incrHeight()}>INCREMENT width</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.decrHeight()}>DECREMENT width</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.incrWidth()}>INCREMENT width</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.decrWidth()}>DECREMENT width</button>
                {/*<Counter framework='World' label ='hello' />*/}
            </div>
        );
    }
}

/*
 * Exportable 
 * connect Component with sotre and actions
 */
export const AspectRatio = connect(mapStateToProps, mapDispatchToProps)(AspectRatioComponent) as React.ComponentClass<ContextProps>
