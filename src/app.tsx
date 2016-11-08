import './styles/style';

import * as jq from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";       

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);