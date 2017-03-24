import './CounterStyle.less';
import * as React from 'react';

/**
 * the current Component State (not store state) definition 
*/ 
type States = {}

/**
 * the htmlAttributes in Component Porps
*/ 
export type ContextProps = {
    framework: string,
    label: string
}

/**
 * the Store state (sub-state) connnected by using Component Porps 
*/ 
export type ConnectedState = {
    counter: number 
}

/**
 * the Porps which will be used in Component to defind the Dispatches
*/
export type ConnectedDispatch = {
    incr: () => void
    decr: () => void
}

/**
 * combine the the Store sub-state, Store dispatchs and Context Props in to Component Props
*/
type Props = ConnectedState  & ConnectedDispatch & ContextProps;

/*
 * Counter Component
 */
export class Counter extends React.Component<Props, States> {
    render() {
        let { counter, incr, decr } = this.props
        return (
            <div className="counter">
                <p>
                    <label>Counter: { this.props.label} { this.props.framework} </label>
                    <b>#{counter}</b>
                </p>
                <button onClick={e => incr()}>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => decr()}>DECREMENT</button>
            </div>
        );
    }
}
