import './Style.less';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AspectRatioAction } from "./Actions";  
import { Counter } from '../../Components/Counter/Counter' 


type States = {}

type ContextProps = {
    helloFromParentCompoment: string,
    label: string
}

type ConnectedState  = {
    aspectRatio: AppStore.AspectRatioState 
}

export type ConnectedDispatch = {
    heightChange(value: number): void,
    widthChange(value: number): void
}

type Props = ConnectedState & ContextProps & ConnectedDispatch;

class AspectRatioComponent extends React.Component<Props, States> {
    render() {
        const { helloFromParentCompoment, label, aspectRatio, heightChange, widthChange } = this.props
        return (
            <div className="aspect-ratio">
                <div>
                    <label>AspectRatioProps: { label} { helloFromParentCompoment} </label>
                    <div>height: { aspectRatio.height}</div>
                    <div>width: { aspectRatio.width}</div>
                </div>
                <Counter framework='AspectRatio' label ='Width' counter = { aspectRatio.height } onChange= { heightChange } />
                <Counter framework='AspectRatio' label ='Height' counter = { aspectRatio.width } onChange= { widthChange } />
            </div>
        );
    }
}

/*
 * Exportable Container
 * connect Component with sotre
 */
const mapStateToProps = (state: AppStore.AppState) => {
    return {
        aspectRatio: state.aspectRatio
    } as ConnectedState
};

const mapHeightCounterDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    heightChange: (n: number) => {
        dispatch(AspectRatioAction.heightChange(n));
    },
    widthChange: (n: number) => {
        dispatch(AspectRatioAction.widthChange(n));
    }
}); 

export const AspectRatio = connect(mapStateToProps, mapHeightCounterDispatchToProps)(AspectRatioComponent) as React.ComponentClass<ContextProps>
