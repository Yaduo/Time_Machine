import './styles/style';

import * as jq from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";       
import Counter from "./components/counter/Counter";       

ReactDOM.render(
    //<Hello compiler="TypeScript" framework="React" />,
    <Counter />,
    document.getElementById("example")
);