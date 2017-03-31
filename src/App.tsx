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
import { ColorWrapper } from './container/colorWrapper/ColorWrapper'
import { ShapeMaker } from './container/shapeMaker/ShapeMaker'


ReactDOM.render(
    <div>
        <Hello compiler="TypeScript -----++++++ " framework="React" />
        <Provider store={store}> 
            <div>
                <HeaderCounter framework='World' label ='hello' /> 
                <FooterCounter framework='World2 ' label ='hello22222' /> 
                <ReusableCounter framework='reusable counter' label ='container' field='counter1' step={10} />
                <ReusableCounter framework='reusable counter 2' label ='container' field='counter2' step={5}  />
                <DatePicker />

                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: 220 }}>
                                <AspectRatio helloFromParentCompoment='hello form parent' label ='test' />
                                <ColorWrapper />
                            </td>
                            <td style={{ verticalAlign: "top", textAlign: "center", width: 500 }}>
                                <h2>Preview</h2>
                                <ShapeMaker />
                            </td>
                            <td style={{ verticalAlign: 'bottom' }}>
                                {/*<ActionPlayer store={store} actions={actions} defaultState={defaultState} />*/}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <h2 style={{ margin: 5, textAlign: 'center' }}>Shapes</h2>
                                {/*<ShapeViewer />*/}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </Provider> 
    </div>,
    document.getElementById("app")
);