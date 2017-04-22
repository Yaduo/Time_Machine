
/*
 * action string
 */
export const SHAPE_MAKER_ACTION_TYPE = {
    ADD_SHAPE: 'SHAPE_MAKER_ADD_SHAPE'
} 

/*
 * action definition
 */
export const shapeMakerAddShapeAction = (color:string, height:number, width:number, top:number, left:number) => {
    const payload: AppStore.ShapeMakeActionPayload = {
        color: color,
        height: height,
        width: width,
        top: top,
        left: left
    }
    return {
        type: SHAPE_MAKER_ACTION_TYPE.ADD_SHAPE,
        payload: payload
    } as AppStore.ShapeMakeAction
}
