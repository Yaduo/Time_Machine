
import { COLOR_WRAPPER_ACTION_TYPE, ColorWrapperAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function colorWrapperReducer(state:AppStore.AppState , action: ColorWrapperAction): AppStore.AppState {
    switch (action.type) {

        case COLOR_WRAPPER_ACTION_TYPE.COLOR_CHANGE:
            return Object.assign({}, state, { color: action.payload });
            
        default:
            return state
            
    }
}
