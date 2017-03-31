
import { SHAPE_MAKER_ACTION_TYPE, ShapeMakerAction } from './Actions'

export type ShapeMakerState = {
    nextShapeId: number;
    shapes: number[];
} 

const initialAspectRatioState: ShapeMakerState = {
    nextShapeId: 0,
    shapes: []
}

/**
 * sub-reducer for AspectRatio
 */
export function shapeMakerReducer(state = initialAspectRatioState , action: ShapeMakerAction): any {
    console.log('shapeMakerReducer state ', state)
    switch (action.type) {
        case SHAPE_MAKER_ACTION_TYPE.ADD_SHAPE:
            const id = state.nextShapeId;
            let shape = Object.assign({}, { id: id }, action);
            // delete shape["type"];
            return Object.assign({}, state, { nextShapeId: id + 1, shapes: [...state.shapes, shape] });
        default:
            return state
    }
}

