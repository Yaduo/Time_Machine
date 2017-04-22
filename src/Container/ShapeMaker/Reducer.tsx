
import { SHAPE_MAKER_ACTION_TYPE } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function shapeMakerReducer(state: AppStore.State , action: AppStore.ShapeMakeAction): AppStore.State {
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