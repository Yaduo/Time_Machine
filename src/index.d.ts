
declare module AppStore {

	interface Action {
		readonly type: string;
        readonly payload?: any;
        readonly meta?: string
        readonly field?: string // point to a dynamic field in store
	}

    interface AppState {
        headerCounter: number;
        footerCounter : number,
        dynamicField: any,
        nextShapeId: number,
        aspectRatio: AspectRatioState,
        color: string // hex color string
        shapes: any[]
    }

    interface AspectRatioState {
        width: number;
        height: number;
    } 

}