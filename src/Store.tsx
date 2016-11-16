
import { createStore } from 'redux'
import { counterReducer }  from './components/Counter/CounterReducer'
import { aspectRatioReducer, AspectRatioState } from './components/aspectRatio/AspectRatioReducer'

/*
 * General App State stucture in the Reducx Store
 */
class AppState {

    counter: number;
    aspectRatio: AspectRatioState;

    constructor() {
        this.counter = 0
        this.aspectRatio = new AspectRatioState()
    }
}

/*
 *  combine Reducers: 
 *    - CounterReducer, AspectRatioReducer
 *    - return AppState
 */
function combineReducers(state = new AppState(), action: any): AppState {
    return {
        counter: counterReducer(state.counter, action),
        aspectRatio: aspectRatioReducer(state.aspectRatio, action)
    }
}

/**
 * create store and initialize state by reducers
 */
export default createStore(combineReducers);