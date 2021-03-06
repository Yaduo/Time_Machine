
import { ASPECT_RATIO_ACTION_TYPE } from './Actions'

export const initialAspectRatioState: AppStore.AspectRatioState = {
    width: 100,
    height: 100
}

export function aspectRatioReducer(state:AppStore.State, action: AppStore.Action): AppStore.State {
    switch (action.type) {

        case ASPECT_RATIO_ACTION_TYPE.HEIGHT_CHANGE:
            return Object.assign({}, state, 
                { 
                    aspectRatio: {
                        width: state.aspectRatio.width , 
                        height: state.aspectRatio.height + action.payload,
                }});

        case ASPECT_RATIO_ACTION_TYPE.WIDTH_CHANGE:
            return Object.assign({}, state, 
                { 
                    aspectRatio: {
                        width: state.aspectRatio.width + action.payload, 
                        height: state.aspectRatio.height 
                }});
                
        default:
            return state
    }
}

