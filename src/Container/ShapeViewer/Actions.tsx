
/*
 * action string
 */
export const SHAPE_VIEWER_ACTION_TYPE = {
    UPDATE: 'SHAPE_VIEWER_UPDATE'
    
} 

/*
 * action definition
 */
export const shapeViewerUpdateShapeAction = (id: number, top: number, left: number) => { 
    const payload: AppStore.ShapeViewerPayload = { id:id, top:top, left:left}
    return { type: SHAPE_VIEWER_ACTION_TYPE.UPDATE, payload: payload } as AppStore.ShapeViewerAction
}