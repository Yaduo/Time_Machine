/*
 * action string
 */
export const COUNTER_INCR = 'COUNTER_INCR';
export const COUNTER_DECR = 'COUNTER_DECR';

/*
 * action definition
 */
export interface ICounterAction {
    type: string;
    value: number;
}

class CounterAction implements ICounterAction {
    type: string;
    value: number;
    constructor(type:string, value:number) {
        this.type = type;
        this.value = value
    }
}

/*
 * action export function 
 */
export function incrCounter(value: number) {
    // must to return a Plan Object
    return Object.assign({}, new CounterAction(COUNTER_INCR, value));
}

export function decrCounter(value: number) {
    return Object.assign({}, new CounterAction(COUNTER_DECR, value));
}

