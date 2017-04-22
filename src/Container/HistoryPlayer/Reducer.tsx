
import { HISTORY_PLAYER_ACTION_TYPE } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function historyPlayerReducer(state: AppStore.State , action: AppStore.Action): AppStore.State {
    switch (action.type) {

        case HISTORY_PLAYER_ACTION_TYPE.LOAD_STATE:
            return Object.assign({}, state, action.payload); 
       
        default:
            return state
            
    }
}