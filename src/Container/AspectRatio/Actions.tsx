
/*
 * action string
 */
export const ASPECT_RATIO_ACTION_TYPE = {
    HEIGHT_CHANGE:'HEIGHT_CHANGE',
    WIDTH_CHANGE: 'WIDTH_CHANGE'
}

export const aspectRatioHeightChangeAction = (value: number) => { 
    return {type: ASPECT_RATIO_ACTION_TYPE.HEIGHT_CHANGE, payload: value} as AppStore.Action 
} 

export const aspectRatioWidthChangeAction = (value: number) => { 
    return {type: ASPECT_RATIO_ACTION_TYPE.WIDTH_CHANGE, payload: value} as AppStore.Action 
} 

