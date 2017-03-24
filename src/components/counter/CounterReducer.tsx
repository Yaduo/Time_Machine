import { COUNTER_ACTION_TYPE, CounterAction } from './CounterActions'

/**
 * sub-reducer for AspectRatio
 */
export function counterReducer(state: number = 0, action: CounterAction): number{
    switch (action.type) {
        case COUNTER_ACTION_TYPE.COUNTER_INCR:
            return state + action.value
        case COUNTER_ACTION_TYPE.COUNTER_DECR:
            return state - action.value
        default:
            return state
    }
}