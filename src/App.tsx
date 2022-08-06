import React from 'react';
import Counter from "./components/Counter/Counter";
import SetCounter from "./components/SetCounter/SetCounter";
import {InitialStateType} from "./redux/reducer";
import {useSelector} from "react-redux";
import {StoreTypeReducers} from "./redux/store";

function App() {
    const state = useSelector<StoreTypeReducers, InitialStateType>(state => state.value)
    return (
        <div className={'wrapper'}>
            <SetCounter
                error={state.error}
                changeMaxValue={state.changeMaxValue}
                changeStartValue={state.changeStartValue}
            />
            <Counter
                counter={state.counter}
                error={state.error}
                maxValue={state.maxValue}
                startValue={state.startValue}
            />
        </div>
    );
}

export default App;
