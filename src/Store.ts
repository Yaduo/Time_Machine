
import { createStore, applyMiddleware, combineReducers } from "redux"
import { actionLogger, actionError } from "./Middleware"
import { headerCounterReducer } from './container/headerCounter/Reducer'
import { footerCounterReducer } from './container/footerCounter/Reducer'
import { aspectRatioReducer, AspectRatioState, initialAspectRatioState } from './container/aspectRatio/AspectRatioReducer'

/*
 * General App State stucture in the Reducx Store
 */
export interface Action {
    readonly type: string;
    readonly payload?: any;
    readonly meta?: string
}

/*
 * General App State stucture in the Reducx Store
 */
export interface AppState {
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
})

/**
 * create store and initialize state by reducers
 */
// export default createStore<AppState>(reducer, applyMiddleware(thunkMiddleware));
export default createStore<AppState>(
    reducer, 
    applyMiddleware(actionLogger, actionError)
);