
import { Action } from '../../Store'

/*
 * action string
 */
export const ASPECT_RATIO_ACTION_TYPE = {
    HEIGHT_INCR:'HEIGHT_INCR',
    WIDTH_INCR: 'WIDTH_INCR',
    HEIGHT_DECR: 'HEIGHT_DECR',
    WIDTH_DECR: 'WIDTH_DECR'
}

/*
 * action definition
 */
export class AspectRatioAction implements Action {

    type: string;
    payload: number;
    
    constructor(type:string, value:number) {
        this.type = type;
        this.payload = value
    }

    ////////////////////////// action functions /////////////////////////////////

    static incrHeight = (value: number) => {
        return Object.assign({}, new AspectRatioAction(ASPECT_RATIO_ACTION_TYPE.HEIGHT_INCR, value));
    }

    static decrHeight = (value: number) => {
        return Object.assign({}, new AspectRatioAction(ASPECT_RATIO_ACTION_TYPE.HEIGHT_DECR, value));
    }

    static incrWidth = (value: number) => {
        return Object.assign({}, new AspectRatioAction(ASPECT_RATIO_ACTION_TYPE.WIDTH_INCR, value));
    }

    static decrWidth = (value: number) => {
        return Object.assign({}, new AspectRatioAction(ASPECT_RATIO_ACTION_TYPE.WIDTH_DECR, value));
    }
}

