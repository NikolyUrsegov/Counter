import React from "react";

export type InitialStateType = {
    maxValue: number
    startValue: number
    changeMaxValue: number
    changeStartValue: number
    counter: number
    error: string
}

let initialState: InitialStateType = {
    maxValue: 5,
    startValue: 0,
    counter: 0,
    changeMaxValue: 0,
    changeStartValue: 0,
    error: ''
}

export function reducer(state: InitialStateType = initialState, action: ActionTypes): InitialStateType {
    switch (action.type) {
        case "SET_VALUE": {
            return {
                ...state,
                startValue: state.changeStartValue,
                maxValue: state.changeMaxValue,
                counter: state.changeStartValue
            }
        }
        case "COUNTER": {
            return {
                ...state, counter: action.payload.value
            }
        }
        case "ERROR": {
            return {
                ...state, error: action.payload.value
            }
        }
        case "CHANGE_MAX_VALUE": {
            let newState = {...state}
            newState = {
                ...state,
                error: 'enter set',
                changeMaxValue: action.payload.value
            }
            if (action.payload.value <= state.changeStartValue) {
                newState = {
                    ...state, error: 'error',
                    changeMaxValue: action.payload.value
                }
            } else if (action.payload.value <= 0) {
                newState = {
                    ...state, error: 'error',
                    changeMaxValue: action.payload.value
                }
            }
            return newState
        }
        case "CHANGE_START_VALUE": {
            let newState = {
                ...state,
                error: 'enter set',
                changeStartValue: action.payload.value
            }
            if (action.payload.value >= state.changeMaxValue) {
                newState = {
                    ...state, error: 'error',
                    changeStartValue: action.payload.value
                }
            } else if (action.payload.value < 0) {
                newState = {
                    ...state, error: 'error',
                    changeStartValue: action.payload.value
                }
            }
            return newState
        }
        default:
            return state
    }

}


type ActionTypes =
    SetValueACType
    | CounterACType
    | ErrorACType
    | ChangeMaxValueACType
    | ChangeStartValueACType
export type SetValueACType = ReturnType<typeof SetValueAC>
export const SetValueAC = () => {
    return {
        type: 'SET_VALUE'
    } as const
}

export type CounterACType = ReturnType<typeof CounterAC>
export const CounterAC = (value: number) => {
    return {
        type: 'COUNTER',
        payload: {
            value: value
        }
    } as const
}
export type ErrorACType = ReturnType<typeof ErrorAC>
export const ErrorAC = (value: string) => {
    return {
        type: 'ERROR',
        payload: {
            value: value
        }
    } as const
}

export type ChangeMaxValueACType = ReturnType<typeof ChangeMaxValueAC>
export const ChangeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {
            value: value
        }
    } as const
}
export type ChangeStartValueACType = ReturnType<typeof ChangeStartValueAC>
export const ChangeStartValueAC = (value: number) => {
    return {
        type: 'CHANGE_START_VALUE',
        payload: {
            value: value
        }
    } as const
}