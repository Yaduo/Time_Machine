
/*
 * action string
 */
export const FOOTER_COUNTER_ACTION_TYPE = {
    COUNTER_INCR: 'FOOTER_COUNTER_INCR',
    COUNTER_DECR: 'FOOTER_COUNTER_DECR'
}

/*
 * action definition
 */
export class FooterCounterAction {
 
    type: string;
    payload: number;

    constructor(type:string, value:number) {
        this.type = type;
        this.payload = value;
    }

    ////////////////////////// action functions /////////////////////////////////

    static incrCounter = (value: number) => {
        // must to return a Plan Object
        return Object.assign({}, new FooterCounterAction(FOOTER_COUNTER_ACTION_TYPE.COUNTER_INCR, value));
    }
    
    static decrCounter = (value: number) => {
        return Object.assign({}, new FooterCounterAction(FOOTER_COUNTER_ACTION_TYPE.COUNTER_DECR, value));
    }
}
