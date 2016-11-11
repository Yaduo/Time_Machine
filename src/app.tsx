import './styles/style';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Hello } from "./components/Hello";       
import Counter from "./components/counter/Counter";       

let store = createStore(
    (state: any, action: any) => {
        switch (action.type) {
            case 'INCR':
                return { counter: state.counter + action.by };
            default:
                return state;
        }
    },
    { counter: 0 }
);

ReactDOM.render(
    //<Hello compiler="TypeScript" framework="React" />,
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById("example")
);