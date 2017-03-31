
import { createStore, applyMiddleware, combineReducers } from "redux"
import { actionRecorder, actionError } from "./Middleware"
import { headerCounterReducer } from './container/headerCounter/Reducer'
import { footerCounterReducer } from './container/footerCounter/Reducer'
import { AspectRatioState, aspectRatioReducer } from './container/aspectRatio/AspectRatioReducer'
import { reusableCounterReducer } from './container/reusableCounter/Reducer'
import { colorWrapperReducer } from './container/colorWrapper/Reducer'
import { shapeMakerReducer, ShapeMakerState } from './container/shapeMaker/Reducer'

/*
 * General App State stucture in the Reducx Store
 */
export interface Action {
    readonly type: string;
    readonly payload?: any;
    readonly meta?: string
    readonly field?: string // point to a dynamic field in store
}

/*
 * General App State stucture in the Reducx Store
 */
export type AppState = {
    headerCounter: number;
    footerCounter : number,
    aspectRatio: AspectRatioState,
    dynamicField: any,
    colorHex: string // hex color string
    shapeMaker: ShapeMakerState
}

/*
 *  combine Reducers: 
 *    - CounterReducer, AspectRatioReducer
 *    - type AppState
 */
const reducer = combineReducers<AppState>({
    headerCounter: headerCounterReducer,
    footerCounter: footerCounterReducer,
    aspectRatio: aspectRatioReducer,
    dynamicField: reusableCounterReducer,
    colorHex: colorWrapperReducer,
    shapeMaker: shapeMakerReducer
})

export let actions:any = [];

/**
 * create store and initialize state by reducers
 */
// export default createStore<AppState>(reducer, applyMiddleware(thunkMiddleware));
export default createStore<AppState>(
    reducer, 
    applyMiddleware(actionRecorder, actionError)
);