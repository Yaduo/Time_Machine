
/*
 * action string
 */
export const COLOR_WRAPPER_ACTION_TYPE = {
    COLOR_CHANGE:'COLOR_CHANGE'
    
}

/*
 * action definition
 */
export class ColorWrapperAction {

    type: string;
    payload: string;
    
    constructor(type:string, payload:string) {
        this.type = type;
        this.payload = payload
    }

    ////////////////////////// action functions /////////////////////////////////

    static colorChange = (value: string) => {
        return Object.assign({}, new ColorWrapperAction(COLOR_WRAPPER_ACTION_TYPE.COLOR_CHANGE, value));
    }
}

