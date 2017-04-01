
import { createStore, applyMiddleware } from "redux"
import { actionRecorder, actionError } from "./Middleware"
import { colorWrapperReducer } from './Container/ColorWrapper/Reducer'
import { shapeMakerReducer } from './Container/ShapeMaker'
import { ASPECT_RATIO_ACTION_TYPE, aspectRatioReducer, initialAspectRatioState } from './Container/AspectRatio'

const initState: AppStore.AppState = { 
    headerCounter: 0,
    footerCounter : 0,
    dynamicField: {},
    nextShapeId: 0, 
    aspectRatio: initialAspectRatioState,
    color: "#000000", 
    shapes: [{}] 
};

function rootReducer(state:any, action:any, reducers: [any]): any {
    if (reducers.length == 0)
        return state
    let reducer = reducers.pop()
    return rootReducer(reducer(state, action), action, reducers)
}

export let actions:any = [];

export default createStore<AppStore.AppState>(
    (state: AppStore.AppState, action: AppStore.Action) => {
        // dipatch for different reducer by action type
        return rootReducer(state, action, [
            aspectRatioReducer,
            colorWrapperReducer,
            shapeMakerReducer
        ])
    }, 

    initState,
    
    applyMiddleware(actionRecorder, actionError)
);