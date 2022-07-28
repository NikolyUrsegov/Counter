import React, {ChangeEvent, useReducer} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SetCounter from "./components/SetCounter/SetCounter";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    CounterAC,
    ErrorAC,
    reducer,
    SetValueAC
} from "./redux/reducer";

function App() {
    const [state, dispatchToValue] = useReducer(reducer, {
        maxValue: 5,
        startValue: 0,
        counter: 0,
        changeMaxValue: 0,
        changeStartValue: 0,
        error: ''
    })
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchToValue(ChangeMaxValueAC(+e.currentTarget.value));
    }
    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchToValue(ChangeStartValueAC(+e.currentTarget.value))
    }

    const setCounterValue = () => {
        dispatchToValue(SetValueAC())
        dispatchToValue(ErrorAC(''))
    }

    const clickCounter = () => {
        dispatchToValue(CounterAC(state.counter + 1))
    }
    const resetCounter = () => {
        dispatchToValue(CounterAC(state.startValue))
    }

    return (
        <div className={'wrapper'}>
            <SetCounter
                state={state}
                changeMaxValueHandler={changeMaxValueHandler}
                changeStartValueHandler={changeStartValueHandler}
                setCounterValue={setCounterValue}
            />
            <Counter
                state={state}
                clickCounter={clickCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;
