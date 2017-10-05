import { Store , Dispatch} from 'react-redux'

// can be used in HTTP request error
export const actionLog = (store: Store<AppStore.State>) => (next: Dispatch<AppStore.State>) => (action: AppStore.Action) => {
    try {
        //console.log("action fired ", action);
        //console.log("Middleware store: ", store.getState());
        next(action) 
    } catch (e) {
        console.log("Action Error ! ", e)
        console.log("Action: ", action)
    }
}
