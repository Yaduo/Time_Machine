import { REUSABLE_COUNTER_ACTION_TYPE, ReusableCounterAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function reusableCounterReducer(state: any = {}, action: ReusableCounterAction): number{
    
    // initial store
    if(state[action.field] == undefined && action.field != undefined)
    {
        state[action.field] = 0
    }

    switch (action.type) {
        case REUSABLE_COUNTER_ACTION_TYPE.COUNTER_INCR:
            return Object.assign({}, state, { [action.field]: state[action.field] + action.payload });

        case REUSABLE_COUNTER_ACTION_TYPE.COUNTER_DECR:
            return Object.assign({}, state, { [action.field]: state[action.field] - action.payload });
        
        default:   
            return state
    }
}
