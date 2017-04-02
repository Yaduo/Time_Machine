import { HistoryPlayerComponent } from './HistoryPlayer'
import { Store , Dispatch} from 'react-redux'
import { HISTORY_PLAYER_ACTION_TYPE } from './Actions'


export const stateRecorder = (store: Store<AppStore.State>) => (next: Dispatch<AppStore.State>) => (action: AppStore.Action) => {

    if (action.type != HISTORY_PLAYER_ACTION_TYPE.LOAD_STATE) {
        HistoryPlayerComponent.storeHistory.pushState(store.getState());
    }
      
    next(action) 
}
