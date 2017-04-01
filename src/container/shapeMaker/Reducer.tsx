
import { SHAPE_MAKER_ACTION_TYPE, ShapeMakerAction } from './Actions'

/**
 * sub-reducer for AspectRatio
 */
export function shapeMakerReducer(state: AppStore.AppState , action: ShapeMakerAction): AppStore.AppState {
    console.log('shapeMakerReducer state ', state)
    switch (action.type) {
        case SHAPE_MAKER_ACTION_TYPE.ADD_SHAPE:
            const id = state.nextShapeId;
            let shape = Object.assign({}, { id: id }, action);
            return Object.assign({}, state, { nextShapeId: id + 1, shapes: [...state.shapes, shape] });
        default:
            return state
    }
}

