
import { createStore, applyMiddleware, combineReducers } from "redux"
import { actionLogger, actionError } from "./Middleware"
import { headerCounterReducer } from './container/headerCounter/Reducer'
import { footerCounterReducer } from './container/footerCounter/Reducer'
import { AspectRatioState, aspectRatioReducer } from './container/aspectRatio/AspectRatioReducer'
import { reusableCounterReducer } from './container/reusableCounter/Reducer'

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
    aspectRatio: AspectRatioState;
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
    dynamicField: reusableCounterReducer
})

/**
 * create store and initialize state by reducers
 */
// export default createStore<AppState>(reducer, applyMiddleware(thunkMiddleware));
export default createStore<AppState>(
    reducer, 
    applyMiddleware(actionLogger, actionError)
);