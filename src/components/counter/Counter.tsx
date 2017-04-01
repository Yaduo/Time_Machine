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
    label: string,
    counter: number,
    onChange(num: number): void
}
 
/*
 * Counter Component
 */
export class Counter extends React.Component<ContextProps, States> {
    render() {
        let { counter } = this.props
        return (
            <div className="counter">
                <p>
                    <label>Counter: { this.props.label} { this.props.framework} </label>
                    <b>#{counter}</b>
                </p>
                <button onClick={ e => this.incr() }> +++ </button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={ e => this.decr() }> --- </button>
            </div>
        );
    }

    incr() {
        this.props.onChange(10);
    }

    decr() {
       this.props.onChange(-10); 
    }
}
