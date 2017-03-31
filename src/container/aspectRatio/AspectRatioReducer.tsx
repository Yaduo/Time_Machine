
import { ASPECT_RATIO_ACTION_TYPE, AspectRatioAction } from './AspectRatioActions'

/**
 *  sub-state sturctue for AspectRatio component only
 */
export type AspectRatioState = {
    width: number;
    height: number;
} 

const initialAspectRatioState: AspectRatioState = {
    width: 100,
    height: 100
}

/**
 * sub-reducer for AspectRatio
 */
export function aspectRatioReducer(state = initialAspectRatioState , action: AspectRatioAction): AspectRatioState {
    
    switch (action.type) {
        case ASPECT_RATIO_ACTION_TYPE.HEIGHT_INCR:
            return { 
                width: state.width, 
                height: state.height + action.payload 
            }

        case ASPECT_RATIO_ACTION_TYPE.HEIGHT_DECR:
            return { 
                width: state.width, 
                height: state.height - action.payload 
            }

        case ASPECT_RATIO_ACTION_TYPE.WIDTH_DECR:
            return  { 
                width: state.width - action.payload, 
                height: state.height 
            }

        case ASPECT_RATIO_ACTION_TYPE.WIDTH_INCR:
            return { 
                width: state.width + action.payload, 
                height: state.height 
            }

        default:
            return state
    }
}

