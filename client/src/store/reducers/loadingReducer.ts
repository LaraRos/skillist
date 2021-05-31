const initialState = "START"

export type PageStatus = string
export type Action = {
    type: string
}

export const loadingReducer = (state:PageStatus = initialState, action:Action) => {
    return action.type
}
