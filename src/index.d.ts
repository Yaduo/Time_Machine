
declare module AppStore {

	interface Action {
		readonly type: string;
        readonly payload?: any;
        readonly meta?: string
        readonly field?: string // point to a dynamic field in store
	}

    interface ShapeMakeActionPayload {
        color: String,
        height: number,
        width: number,
        top: number,
        left: number
    }

    interface ShapeMakeAction extends Action {
        readonly payload?: ShapeMakeActionPayload;
    }

    interface ShapeViewerPayload {
        id: number,
        top: number,
        left: number
    }

    interface ShapeViewerAction extends Action {
        readonly payload?: ShapeViewerPayload;
    }

    interface State {
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

    interface StoreHistory {
        states: State[],
        stateIndex: number,
        reset: () => void,
        prev: () => State,
        next: () => State,
        goTo: (index: number) => State,
        canPrev: () => boolean,
        canNext: () => boolean,
        pushState: (nextState: State) => void
    }

}