import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SetCounter from "./components/SetCounter/SetCounter";

function App() {
    const [counter, setCounter] = useState<number>(0);
    const [valueCounter, setValueCounter] = useState({
        startValue: 0,
        maxValue: 5
    })
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [informSpan, setInformSpan] = useState<string>('')


    useEffect(() => {
        let state
        const stateStore = localStorage.getItem('counter')
        if (stateStore !== null) {
            state = JSON.parse(stateStore)
            setStartValue(state.start)
            setMaxValue(state.max)
            setCounter(state.start)
            // setStartValueCounter(state.start)
            // setMaxValueCounter(state.max)
            setValueCounter({
                startValue: state.start,
                maxValue: state.max
            })
        }
    }, [informSpan])

    // const getCounterValue = (key: string) => {
    //     let state
    //     const stateStore = localStorage.getItem(key)
    //     if (stateStore !== null) {
    //         state = JSON.parse(stateStore)
    //         setStartValueCounter(state.start)
    //         setMaxValueCounter(state.max)
    //         setInformSpan('')
    //     }
    // }
    const setCounterValue = (key: string) => {
        console.log("set")
        const preferenceCounter = {
            max: maxValue,
            start: startValue
        }
        const counter = JSON.stringify(preferenceCounter)
        localStorage.setItem(key, counter)
        setInformSpan('')
    }

    return (
        <div className={'wrapper'}>
            <SetCounter
                informSpan={informSpan}
                setInformSpan={setInformSpan}
                maxValue={maxValue}
                startValue={startValue}
                setCounterValue={setCounterValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
            />
            <Counter
                counter={counter}
                setCounter={setCounter}
                valueCounter={valueCounter}
                // maxValue={maxValueCounter}
                // startValue={startValueCounter}
                // getCounterValue={getCounterValue}
                informSpan={informSpan}
            />
        </div>
    );
}

export default App;
