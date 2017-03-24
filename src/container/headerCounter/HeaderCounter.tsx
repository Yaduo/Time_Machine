
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { HeaderCounterAction } from './Actions'
import { Counter, ConnectedState, ConnectedDispatch, ContextProps } from '../../components/counter/Counter' 
import { AppState } from 'store'

/*
 * exportable 
 * connect Component with sotre and actions
 */

const mapStateToProps = (state: AppState) => {
    return {
        counter: state.headerCounter
    } as ConnectedState
} 

const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    incr: () => {
        dispatch(HeaderCounterAction.incrCounter(1));
    },
    decr: () => {
        dispatch(HeaderCounterAction.decrCounter(1));
    }
}); 


export const HeaderCounter = connect(mapStateToProps, mapDispatchToProps)(Counter) as React.ComponentClass<ContextProps>


