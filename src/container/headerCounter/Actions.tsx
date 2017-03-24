import { Action } from '../../Store'

/*
 * action string
 */
export const HEADER_COUNTER_ACTION_TYPE = {
    COUNTER_INCR: 'HEADER_COUNTER_INCR',
    COUNTER_DECR: 'HEADER_COUNTER_DECR'
}

/*
 * action definition
 */
export class HeaderCounterAction implements Action {
 
    type: string;
    payload: number;

    constructor(type:string, value:number) {
        this.type = type;
        this.payload = value;
    }

    ////////////////////////// action functions /////////////////////////////////

    static incrCounter = (value: number) => {
        // must to return a Plan Object
        return Object.assign({}, new HeaderCounterAction(HEADER_COUNTER_ACTION_TYPE.COUNTER_INCR, value));
    }
    
    static decrCounter = (value: number) => {
        return Object.assign({}, new HeaderCounterAction(HEADER_COUNTER_ACTION_TYPE.COUNTER_DECR, value));
    }
}
