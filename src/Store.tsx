
import { createStore } from 'redux'
import counterReducer from './components/Counter/CounterReducer'

export interface IAppStore {
    counter:number;
}

class AppStore implements IAppStore {
    counter = 0
}

function combineReducers(state: IAppStore = new AppStore(), action: any) {
    return {
        counter: counterReducer(state.counter, action),
        ggg: {ddd: "asdgasdg", d:"asdgasdge sag"},
        ddd: {p :0,a:2}
    }
}

let store = createStore(combineReducers)

export default store;