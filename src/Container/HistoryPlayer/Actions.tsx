
/*
 * action string
 */
export const HISTORY_PLAYER_ACTION_TYPE = {
    LOAD_STATE: 'LOAD_STATE_FROM_HISTORY'
}

/*
 * action definition
 */
export const historyPlayerLoadStateAction = (state: AppStore.State) => { return { type: HISTORY_PLAYER_ACTION_TYPE.LOAD_STATE, payload: state } as AppStore.Action}

