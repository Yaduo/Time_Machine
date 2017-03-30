import './styles/style';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { DatePicker } from 'antd';
import store from './Store'
import { Hello } from "./components/Hello";        
import { HeaderCounter } from './container/headerCounter/HeaderCounter'
import { FooterCounter } from './container/footerCounter/FooterCounter'
import { AspectRatio } from "./container/aspectRatio/AspectRatio"
import { ReusableCounter } from './container/reusableCounter/ReusableCounter'


ReactDOM.render(
    <div>
        <Hello compiler="TypeScript -----++++++ " framework="React" />
        <Provider store={store}> 
            <div>
                <HeaderCounter framework='World' label ='hello' /> 
                <AspectRatio helloFromParentCompoment='hello form parent' label ='test' />
                <FooterCounter framework='World2 ' label ='hello22222' /> 
                <ReusableCounter framework='reusable counter' label ='container' field='counter1' step={10} />
                <ReusableCounter framework='reusable counter 2' label ='container' field='counter2' step={5}  />
                <DatePicker />
            </div>
        </Provider> 
    </div>,
    document.getElementById("app")
);