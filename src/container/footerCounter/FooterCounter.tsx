
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { FooterCounterAction } from './Actions'
import { Counter, ConnectedState, ConnectedDispatch, ContextProps } from '../../components/counter/Counter' 
import { AppState } from 'store'

/*
 * exportable 
 * connect Component with sotre and actions
 */

const mapStateToProps = (state: AppState) => {
    return {
        counter: state.footerCounter
    } as ConnectedState
} 

const mapDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    incr: () => {
        dispatch(FooterCounterAction.incrCounter(1));
    },
    decr: () => {
        dispatch(FooterCounterAction.decrCounter(1));
    }
}); 

export const FooterCounter = connect(mapStateToProps, mapDispatchToProps)(Counter) as React.ComponentClass<ContextProps>


