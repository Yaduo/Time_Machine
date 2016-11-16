import './CounterStyle.less';
import * as React from 'react';
import { connect } from 'react-redux';
import { CounterAction } from './CounterActions'

/**
 * the current Component State (not store state) definition 
*/ 
interface States {}


/**
 * the htmlAttributes in Component Porps
*/ 
interface ContextProps {
    framework: string,
    label: string
}

/**
 * the Store state (sub-state) connnected by using Component Porps 
*/ 
interface ConnectedState {
    counter: number 
}
const mapStateToProps = (state: ConnectedState) => state;

/**
 * the Porps which will be used in Component to defind the Dispatches
*/
interface ConnectedDispatch {
    incr: () => void
    decr: () => void
}
const mapDispatchToProps = (dispatch: any) => ({
    incr: () => {
        dispatch(CounterAction.incrCounter(1));
    },
    decr: () => {
        dispatch(CounterAction.decrCounter(1));
    }
} as ConnectedDispatch); // define the dispatch type

/**
 * combine the the Store sub-state, Store dispatchs and Context Props in to Component Props
*/
type Props = ConnectedState  & ConnectedDispatch & ContextProps;

/*
 * Counter Component
 */
class CounterComponent extends React.Component<Props, States> {
    render() {
        return (
            <div className="counter">
                <p>
                    <label>Counter: { this.props.label} { this.props.framework} </label>
                    <b>#{this.props.counter}</b>
                </p>
                <button onClick={e => this.props.incr()}>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.decr()}>DECREMENT</button>
            </div>
        );
    }
}

/*
 * exportable 
 * connect Component with sotre and actions
 */
export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent) as React.ComponentClass<ContextProps>
