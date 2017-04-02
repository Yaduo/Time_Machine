
/*
 * action string
 */
export const HISTORY_PLAYER_ACTION_TYPE = {
    LOAD_STATE: 'LOAD_STATE_FROM_HISTORY'
}

/*
 * action definition
 */
export class HistoryPlayerAction implements AppStore.Action {

    type: string;
    payload: AppStore.State;
    
    constructor(type:string, payload:AppStore.State) {
        this.type = type;
        this.payload = payload
    }

    ////////////////////////// action functions /////////////////////////////////

    static loadState = (state: AppStore.State) => {
        return Object.assign({}, new HistoryPlayerAction(HISTORY_PLAYER_ACTION_TYPE.LOAD_STATE, state));
    }
}

