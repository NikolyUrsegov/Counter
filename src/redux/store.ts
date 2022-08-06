import { legacy_createStore as createStore} from 'redux'
import {combineReducers} from "redux";
import {reducer} from "./reducer";

const RootReducer = combineReducers({
    value: reducer
})

export const store = createStore(RootReducer)

export type StoreTypeReducers = ReturnType<typeof RootReducer>