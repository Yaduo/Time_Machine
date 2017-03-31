
import { COLOR_WRAPPER_ACTION_TYPE, ColorWrapperAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function colorWrapperReducer(state = "#000000" , action: ColorWrapperAction): string {
    switch (action.type) {
        case COLOR_WRAPPER_ACTION_TYPE.COLOR_CHANGE:
            return action.payload;
        default:
            return state
    }
}

