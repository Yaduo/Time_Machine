
import { createStore, applyMiddleware } from "redux"
import { actionLog } from "./Middleware"
import { colorWrapperReducer } from './Container/ColorWrapper/Reducer'
import { shapeMakerReducer } from './Container/ShapeMaker'
import { aspectRatioReducer, initialAspectRatioState } from './Container/AspectRatio'
import { shapeViewerReducer } from './Container/ShapeViewer'
import { historyPlayerReducer, stateRecorder } from './Container/HistoryPlayer'

export const initState: AppStore.State = { 
    nextShapeId: 0, 
    aspectRatio: initialAspectRatioState,
    color: "#000000", 
    shapes: [] 
};

function rootReducer(state:AppStore.State, action:AppStore.Action, reducers: [any]): AppStore.State {
    if (reducers.length == 0)
        return state
    let reducer = reducers.pop()
    return rootReducer(reducer(state, action), action, reducers)
}

export default createStore<AppStore.State>(
    (state: AppStore.State, action: AppStore.Action) => {
        // dipatch for different reducer by action type
        const finalState = rootReducer(state, action, [
            aspectRatioReducer,
            colorWrapperReducer,
            shapeMakerReducer,
            shapeViewerReducer,
            historyPlayerReducer
        ])
        console.log(finalState)
        return finalState
    }, 

    initState,
    
    applyMiddleware(stateRecorder, actionLog)
);


