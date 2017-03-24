import './AspectRatioStyle.less';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store'
import { AspectRatioAction } from "./AspectRatioActions";  
import { AspectRatioState } from './AspectRatioReducer' 
import * as CounterComponents from '../../components/counter/Counter' 

/*
 * reusable component 1 : Counter 
 * to calculate the With of the AspectRatio
 * connect Component with sotre and AspectRatio actions
 */
const mapWidthCounterStateToProps = (state: AppState) => {
    return {
        counter: state.aspectRatio.width
    } as CounterComponents.ConnectedState
} 

const mapWidthCounterDispatchToProps = (dispatch: Dispatch<CounterComponents.ConnectedDispatch>) => ({
    incr: () => {
        dispatch(AspectRatioAction.decrWidth(1));
    },
    decr: () => {
        dispatch(AspectRatioAction.incrWidth(1));
    }
}); 

// be used in AspectRatioComponent
const WidthCounter = connect(mapWidthCounterStateToProps, mapWidthCounterDispatchToProps)(CounterComponents.Counter) as React.ComponentClass<CounterComponents.ContextProps>

/*
 * reusable component 2 : Counter 
 * to calculate the Height of the AspectRatio
 * connect Component with sotre and AspectRatio actions
 */
const mapHeightCounterStateToProps = (state: AppState) => {
    return {
        counter: state.aspectRatio.height
    } as CounterComponents.ConnectedState
} 

const mapHeightCounterDispatchToProps = (dispatch: Dispatch<CounterComponents.ConnectedDispatch>) => ({
    incr: () => {
        dispatch(AspectRatioAction.incrHeight(1));
    },
    decr: () => {
        dispatch(AspectRatioAction.decrHeight(1));
    }
}); 

// be used in AspectRatioComponent
const HeightCounter = connect(mapHeightCounterStateToProps, mapHeightCounterDispatchToProps)(CounterComponents.Counter) as React.ComponentClass<CounterComponents.ContextProps>

/*
 * AspectRatio Component
 * Dump Component & Type define
 */
type States = {}

type ContextProps = {
  helloFromParentCompoment: string,
  label: string
}

type ConnectedState = {
  aspectRatio: AspectRatioState 
}

type Props = ConnectedState & ContextProps;

export class AspectRatioComponent extends React.Component<Props, States> {
    render() {
        console.log(this.props)
        return (
            <div className="aspect-ratio">
                <div>
                    <label>AspectRatioProps: { this.props.label} { this.props.helloFromParentCompoment} </label>
                    <div>height: {this.props.aspectRatio.height}</div>
                    <div>width: {this.props.aspectRatio.width}</div>
                </div>
                <WidthCounter framework='AspectRatio' label ='Width'/>
                <HeightCounter framework='AspectRatio' label ='Height'/>
                
            </div>
        );
    }
}

/*
 * Exportable Container
 * connect Component with sotre
 */
const mapStateToProps = (state: AppState) => {
    return {
        aspectRatio: state.aspectRatio
    } as ConnectedState
};
export const AspectRatio = connect(mapStateToProps)(AspectRatioComponent) as React.ComponentClass<ContextProps>

