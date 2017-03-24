import { FOOTER_COUNTER_ACTION_TYPE, FooterCounterAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function footerCounterReducer(state: number = 0, action: FooterCounterAction): number{
    
    switch (action.type) {
        case FOOTER_COUNTER_ACTION_TYPE.COUNTER_INCR:
            return state + (action.payload * 2)

        case FOOTER_COUNTER_ACTION_TYPE.COUNTER_DECR:
            return state - (action.payload * 2)
        
        default:   
            return state
    }
}
