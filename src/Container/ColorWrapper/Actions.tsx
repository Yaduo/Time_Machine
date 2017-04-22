
/*
 * action string
 */
export const COLOR_WRAPPER_ACTION_TYPE = {
    COLOR_CHANGE:'COLOR_CHANGE'
    
}

/*
 * action definition
 */
export const colorWrapperColorChangeAction = (value: string) => { return { type: COLOR_WRAPPER_ACTION_TYPE.COLOR_CHANGE, payload: value } as AppStore.Action}
