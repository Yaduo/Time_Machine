import * as React from 'react';
import { connect , Dispatch} from 'react-redux';
import { HistoryPlayerAction } from './Actions'

type States = { }

type ContextProps = { 
    defaultState: AppStore.State
}

type ConnectedState = { 
    state: AppStore.State
}

export type ConnectedDispatch = {
    replayStates: (history: AppStore.StoreHistory) => void;
    resetState: (defaultState: AppStore.State, history: AppStore.StoreHistory) => void;
    prevState: (history: AppStore.StoreHistory) => void;
    nextState: (history: AppStore.StoreHistory) => void;
    goToState: (history: AppStore.StoreHistory, stateIndex: number) => void;
 }

type Props = AppStore.State & ConnectedDispatch & ContextProps;

export class HistoryPlayerComponent extends React.Component<Props, States> {

    // History Model
    static storeHistory: AppStore.StoreHistory = {
        states: [],
        stateIndex: 0,
        reset() {
            this.states = [];
            this.stateIndex = -1;
        },
        prev() { return this.states[--this.stateIndex]; },
        next() { return this.states[++this.stateIndex]; },
        goTo(index: number) { return this.states[this.stateIndex=index]; },
        canPrev() { return this.stateIndex <= 0; },
        canNext() { return this.stateIndex >= this.states.length - 1; },
        pushState(nextState: AppStore.State) {
            this.states.push(nextState);
            this.stateIndex = this.states.length - 1;
        }
    }

    render() {
        const { defaultState } = this.props
        const { storeHistory } = HistoryPlayerComponent
        return (
            <div>
                <button onClick={e => this.props.replayStates(storeHistory)}>replay</button>
                <span></span>
                <button onClick={e => this.props.resetState(defaultState, storeHistory)}>clear</button>
                <p>
                    <b>{ storeHistory.states.length }</b> states
                </p>
                <button onClick={e => this.props.prevState(storeHistory)} disabled={storeHistory.canPrev()}>prev</button>
                <span> </span>
                <button onClick={e => this.props.nextState(storeHistory)} disabled={storeHistory.canNext()}>next</button>
                <p>
                    <b>{storeHistory.stateIndex + 1}</b> position
                </p>
                <input type="range" min="0" max={storeHistory.states.length - 1}
                    disabled={storeHistory.states.length === 0}
                    value={storeHistory.stateIndex} 
                    onChange={ e => this.props.goToState(storeHistory, parseInt(e.currentTarget.value)) }     
                />
            </div>
        );
    }
}

/*
 * Exportable Container
 * connect Component with sotre
 */
const mapStateToProps = (state: AppStore.State) => {
    return state
};

const mapHeightCounterDispatchToProps = (dispatch: Dispatch<ConnectedDispatch>) => ({
    replayStates: (history: AppStore.StoreHistory) => {
        history.states.map((state, index) => setTimeout(() => dispatch(HistoryPlayerAction.loadState(state)), 10 * index))
    },
    
    resetState: (defaultState: AppStore.State, history: AppStore.StoreHistory) => {
        dispatch(HistoryPlayerAction.loadState(defaultState));
        history.reset();
    },

    prevState: (history: AppStore.StoreHistory) => {
        const state = history.prev();
        dispatch(HistoryPlayerAction.loadState(state));
    },

    nextState: (history: AppStore.StoreHistory) => {
        const state = history.next();       
        dispatch(HistoryPlayerAction.loadState(state));
    },

    goToState: (history: AppStore.StoreHistory, index: number) => {
        const state = history.goTo(index)
        dispatch(HistoryPlayerAction.loadState(state));
    }
}); 

export const HistoryPlayer = connect(mapStateToProps, mapHeightCounterDispatchToProps)(HistoryPlayerComponent) as React.ComponentClass<ContextProps>
