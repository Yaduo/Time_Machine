
/*
 * action string
 */
export const SHAPE_MAKER_ACTION_TYPE = {
    ADD_SHAPE: 'SHAPE_MAKER_ADD_SHAPE'
    
} 

type Payload = {
    color: String,
    height: number,
    width: number,
    top: number,
    left: number
}

/*
 * action definition
 */
export class ShapeMakerAction {

    type: string;
    payload: Payload;
    
    constructor(type:string, payload:Payload) {
        this.type = type;
        this.payload = payload
    }

    ////////////////////////// action functions /////////////////////////////////

    static addShape = (color:string, height:number, width:number, top:number, left:number) => {
        const payload:Payload = {
            color:color,
            height:height,
            width:width,
            top:top,
            left:left
        }
        return Object.assign({}, new ShapeMakerAction(SHAPE_MAKER_ACTION_TYPE.ADD_SHAPE, payload));
    }
}

