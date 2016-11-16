/*
 * action string
 */
export const COUNTER_ACTION_TYPE = {
    COUNTER_INCR: 'COUNTER_INCR',
    COUNTER_DECR: 'COUNTER_DECR'
}

/*
 * action definition
 */
export class CounterAction {

    type: string;
    value: number;

    constructor(type:string, value:number) {
        this.type = type;
        this.value = value;
    }

    ////// action function 
    static incrCounter = (value: number) => {
        // must to return a Plan Object
        return Object.assign({}, new CounterAction(COUNTER_ACTION_TYPE.COUNTER_INCR, value));
    }
    
    static decrCounter = (value: number) => {
        return Object.assign({}, new CounterAction(COUNTER_ACTION_TYPE.COUNTER_DECR, value));
    }
}
