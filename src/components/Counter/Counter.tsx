import React, {useState} from 'react';
import Panel from "./Panel/Panel";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number
    setCounter: (value: number) => void
    startValue?: number
    maxValue?: number
    valueCounter: {
        startValue: number
        maxValue: number
    }
    getCounterValue?: (key: string) => void
    informSpan: string
}

const Counter = (props: CounterPropsType) => {
    const onClickIncHandler = () => {
        props.counter < props.valueCounter.maxValue && props.setCounter(props.counter + 1)
    }
    const onClickResetHandler = () => {
        props.setCounter(props.valueCounter.startValue)
    }

    // const getCounterValueHandler = () => {
    //     props.getCounterValue('counter')
    //     props.setCounter(props.startValue)
    // }

    return (
        <div className={s.container}>
            <Panel
                informSpan={props.informSpan}
                maxCounter={props.valueCounter.maxValue}
                counter={props.counter}/>
            <ButtonBlock
                informSpan={props.informSpan}
                counter={props.counter}
                startValue={props.valueCounter.startValue}
                maxCounter={props.valueCounter.maxValue}
                clickInc={onClickIncHandler}
                clickRes={onClickResetHandler}/>
            {/*<button onClick={getCounterValueHandler}>get</button>*/}
        </div>
    );
};

export default Counter;