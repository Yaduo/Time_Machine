import './CounterStyle.less';
import * as React from 'react';
import { connect } from 'react-redux';
import { incrCounter, decrCounter } from "./CounterActions";   

// sub-store definition for counter only
interface CounterState {}

// the htmlAttributes in CounterComponent 
interface ContextProps {
  framework: string,
  label: string
}

// the props provided by store which will be used in CounterComponent
interface ConnectedState {
  counter: number 
}
const mapStateToProps = (state: ConnectedState) => state;

// the props which will be used in CounterComponent to defind the Dispatches
interface ConnectedDispatch {
  incr: () => void
  decr: () => void
}
const mapDispatchToProps = (dispatch: any) => ({
    incr: () => {
        dispatch(incrCounter(1));
    },
    decr: () => {
        dispatch(decrCounter(1));
    }
} as ConnectedDispatch); // difine the dispatch type

// inject all the Props in to Component
type CounterProps = ConnectedState  & ConnectedDispatch & ContextProps;


/*
 * Counter Component
 */
class CounterComponent extends React.Component<CounterProps, CounterState> {
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
 * connect Component with sotre
 */
export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent) as React.ComponentClass<ContextProps>
