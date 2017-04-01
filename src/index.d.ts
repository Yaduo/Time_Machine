
declare module AppStore {

	interface Action {
		readonly type: string;
        readonly payload?: any;
        readonly meta?: string
        readonly field?: string // point to a dynamic field in store
	}

    interface AppState {
        nextShapeId: number,
        aspectRatio: AspectRatioState,
        color: string // hex color string
        shapes: Shape[]
    }

    interface AspectRatioState {
        width: number;
        height: number;
    } 

    interface Shape {
        id: number
        width: number, 
        height: number, 
        color: string,
        top: number, 
        left: number
    }

}