import './styles/style';

import * as React from "react";
import * as ReactDOM from "react-dom";

import store from './Store'
import { Provider } from 'react-redux';

import { Hello } from "./components/Hello";       
import { Counter } from "./components/Counter/Counter";   

import { AspectRatio } from "./components/aspectRatio/AspectRatio"
 
ReactDOM.render(
    <div>
        <Hello compiler="TypeScript -----++++++ " framework="React" />
        <Provider store={store}> 
            <div>
                <Counter framework='World' label ='hello' /> 
                <AspectRatio helloFromParentCompoment='hello form parent' label ='test' />
            </div>
        </Provider> 
    </div>,
    document.getElementById("example")
);