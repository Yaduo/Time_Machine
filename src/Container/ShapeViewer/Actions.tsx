
/*
 * action string
 */
export const SHAPE_VIEWER_ACTION_TYPE = {
    UPDATE: 'SHAPE_VIEWER_UPDATE'
    
} 

type Payload = {
    id: number,
    top: number,
    left: number
}

/*
 * action definition
 */
export class ShapeViewerAction {

    type: string;
    payload: Payload;
    
    constructor(type:string, payload:Payload) {
        this.type = type;
        this.payload = payload
    }

    ////////////////////////// action functions /////////////////////////////////

    static updateShape = (id: number, top: number, left: number) => {
        const payload:Payload = { id:id, top:top, left:left}
        return Object.assign({}, new ShapeViewerAction(SHAPE_VIEWER_ACTION_TYPE.UPDATE, payload));
    }
}

