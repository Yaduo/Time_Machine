import { HEADER_COUNTER_ACTION_TYPE, HeaderCounterAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function headerCounterReducer(state: number = 0, action: HeaderCounterAction): number {
    
    switch (action.type) {
        case HEADER_COUNTER_ACTION_TYPE.COUNTER_INCR:
            return state + action.payload

        case HEADER_COUNTER_ACTION_TYPE.COUNTER_DECR:
            return state - action.payload
        
        default:   
            return state
    }
}
