import './styles/style';

import * as React from "react";
import * as ReactDOM from "react-dom";

import store from './Store'
import { Provider } from 'react-redux';

import { Hello } from "./components/Hello";       
import { Counter } from "./components/Counter/Counter";   
 
ReactDOM.render(
    <div>
        <Hello compiler="TypeScript -----++++++ " framework="React" />
        <Provider store={store}> 
            <Counter framework='World' label ='hello' /> 
        </Provider> 
    </div>,
    document.getElementById("example")
);