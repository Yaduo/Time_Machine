/**
 * This is a example for a reusable container for redux
 * the problem is this container still couple with the combineReducers when createStore. And the store's state tree was destoried, state become dynamic (runtime).
 * Not suggest to use this way to reuse components
 */

import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ReusableCounterAction } from './Actions'
import { AppState } from 'store'

/**
 * the current Component Props definition 
*/ 
type States = {}

export type ContextProps = {
    framework: string,
    label: string,
    field: string, // points to a dynamic field in Store state
    step: number // counter magnification rate
}

export type ConnectedState = {
    counter: number 
}

export type ConnectedDispatch = {
    incr: () => void
    decr: () => void
}

type Props = ConnectedState  & ConnectedDispatch & ContextProps;

class ReusableCounterComponent extends React.Component<any, any> {
    render() {
        // points to a dynamic field in Store state
        const field = this.props.field, step = this.props.step || 1;
        return (
            <div>
                <p>
                    <label>{field}: </label>
                    <b>{this.props.counter}</b>
                </p>
                <button style={{width:30, margin:2}} onClick={e => this.props.decr(field, step)}>-</button>
                <button style={{width:30, margin:2}} onClick={e => this.props.incr(field, step)}>+</button>
            </div>
        );
    }
}

const mapStateToProps = (state: any, props:Props) => {
    return {
        counter: state.dynamicField[props.field] || 0
    } as ConnectedState
} 

const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    incr: (field:string, step:number) => {
        dispatch(ReusableCounterAction.incrCounter(field, step));
    },
    decr: (field:string, step:number) => {
        dispatch(ReusableCounterAction.decrCounter(field, step));
    }
}); 

export const ReusableCounter = connect(mapStateToProps, mapDispatchToProps)(ReusableCounterComponent) as React.ComponentClass<ContextProps>
