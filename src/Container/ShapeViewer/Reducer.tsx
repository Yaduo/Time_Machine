
import { SHAPE_VIEWER_ACTION_TYPE, ShapeViewerAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function shapeViewerReducer(state: AppStore.State , action: ShapeViewerAction): AppStore.State {
    switch (action.type) {

        case SHAPE_VIEWER_ACTION_TYPE.UPDATE:
            const shape = Object.assign({}, 
                state.shapes.filter(x => x.id === action.payload.id)[0], 
                { top: action.payload.top, left: action.payload.left });

            return Object.assign({}, state, { shapes: [...state.shapes.filter(x => x.id !== action.payload.id), shape] });
       
        default:
            return state
            
    }
}