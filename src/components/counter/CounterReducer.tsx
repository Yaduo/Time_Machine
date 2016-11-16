import { COUNTER_ACTION_TYPE, CounterAction } from './CounterActions'

export default function(state: number = 0, action: CounterAction) {
    switch (action.type) {
        case COUNTER_ACTION_TYPE.COUNTER_INCR:
            return state + action.value
        case COUNTER_ACTION_TYPE.COUNTER_DECR:
            return state - action.value
        default:
            return state
    }
}
