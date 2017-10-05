
import './Styles/Style';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store, { initState } from './Store'
import { Hello } from "./Components/Hello";        
import { AspectRatio } from "./Container/AspectRatio"
import { ColorWrapper } from './Container/ColorWrapper/ColorWrapper'
import { ShapeMaker } from './Container/ShapeMaker'
import { ShapeViewer } from './Container/ShapeViewer'
import { HistoryPlayer } from './Container/HistoryPlayer'

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript -----++++++ " framework="React" />
        <Provider store={store}> 
            <div>
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
                            <td style={{verticalAlign:"top"}}>
                                <h2>History</h2>
                                <HistoryPlayer defaultState={initState} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <h2 style={{ margin: 5, textAlign: 'center' }}>Shapes</h2>
                                <ShapeViewer />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </Provider> 
    </div>,
    document.getElementById("app")
);