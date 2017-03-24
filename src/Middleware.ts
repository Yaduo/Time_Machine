

export const actionLogger = (store: any) => (next: any) => (action: any) => {
    console.log("action fired ", action);
    next(action) 
}

// can be used in HTTP request error
export const actionError = (store: any) => (next: any) => (action: any) => {
    try {
        next(action) 
    } catch (e) {
        console.log("Action Error ! ", e)
        console.log("Action: ", action)
    }
}
