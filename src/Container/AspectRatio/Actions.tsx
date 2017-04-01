
/*
 * action string
 */
export const ASPECT_RATIO_ACTION_TYPE = {
    HEIGHT_CHANGE:'HEIGHT_CHANGE',
    WIDTH_CHANGE: 'WIDTH_CHANGE'
}

/*
 * action definition
 */
export class AspectRatioAction implements AppStore.Action {

    type: string;
    payload: number;
    
    constructor(type:string, payload:number) {
        this.type = type;
        this.payload = payload
    }

    ////////////////////////// action functions /////////////////////////////////

    static heightChange = (value: number) => {
        return Object.assign({}, new AspectRatioAction(ASPECT_RATIO_ACTION_TYPE.HEIGHT_CHANGE, value));
    }

    static widthChange = (value: number) => {
        return Object.assign({}, new AspectRatioAction(ASPECT_RATIO_ACTION_TYPE.WIDTH_CHANGE, value));
    }

}

