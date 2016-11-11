import { COUNTER_INCR, COUNTER_DECR, ICounterAction } from './CounterActions'

export default function(state: number = 0, action: ICounterAction) {
    switch (action.type) {
        case COUNTER_INCR:
            return state + action.value
        case COUNTER_DECR:
            return state - action.value
        default:
            return state
    }
}
