
import { SHAPE_MAKER_ACTION_TYPE, ShapeMakerAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function shapeMakerReducer(state: AppStore.AppState , action: ShapeMakerAction): AppStore.AppState {
    switch (action.type) {

        case SHAPE_MAKER_ACTION_TYPE.ADD_SHAPE:
            const id = state.nextShapeId;
            const { color, height, width, top, left } = action.payload
            const shape = Object.assign({}, {id:id}, {color:color}, {height:height}, {width: width}, {top: top}, {left: left});
            return Object.assign({}, state, { nextShapeId: id + 1, shapes: [...state.shapes, shape] });
       
        default:
            return state
            
    }
}