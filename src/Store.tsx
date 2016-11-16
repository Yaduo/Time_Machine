
import { createStore } from 'redux'
import counterReducer from './components/Counter/CounterReducer'

class AppStore {
    counter = 0
}

function combineReducers(state = new AppStore(), action: any) {
    return {
        counter: counterReducer(state.counter, action),
        ggg: {ddd: "asdgasdg", d:"asdgasdge sag"},
        ddd: {p :0,a:2}
    }
}

let store = createStore(combineReducers)

export default store;