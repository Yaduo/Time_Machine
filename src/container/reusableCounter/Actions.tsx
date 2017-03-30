import { Action } from '../../Store'

/*
 * action string
 */
export const REUSABLE_COUNTER_ACTION_TYPE = {
    COUNTER_INCR: 'REUSABLE_COUNTER_INCR',
    COUNTER_DECR: 'REUSABLE_COUNTER_DECR'
}

/*
 * action definition
 */
export class ReusableCounterAction implements Action {
 
    type: string;
    payload: number;
    field: string;

    constructor(type:string, step:number, field:string) {
        this.type = type;
        this.payload = 1*step;
        this.field = field;
    }

    ////////////////////////// action functions /////////////////////////////////

    static incrCounter = (filed:string, step: number) => {
        // must to return a Plan Object
        return Object.assign({}, new ReusableCounterAction(REUSABLE_COUNTER_ACTION_TYPE.COUNTER_INCR, step, filed));
    }
    
    static decrCounter = (filed:string, step: number) => {
        return Object.assign({}, new ReusableCounterAction(REUSABLE_COUNTER_ACTION_TYPE.COUNTER_DECR, step, filed));
    }
}
