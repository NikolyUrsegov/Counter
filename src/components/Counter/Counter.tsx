import React, {useState} from 'react';
import Panel from "./Panel/Panel";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import s from './Counter.module.css'
import {InitialStateType} from "../../redux/reducer";

type CounterPropsType = {
    clickCounter: () => void
    state: InitialStateType
    resetCounter: () => void
}

const Counter = (props: CounterPropsType) => {
    const onClickIncHandler = () => {
        props.state.counter < props.state.maxValue && props.clickCounter()
    }
    const onClickResetHandler = () => {
        props.resetCounter()
    }

    return (
        <div className={s.container}>
            <Panel
                informSpan={props.state.error}
                maxCounter={props.state.maxValue}
                counter={props.state.counter}/>
            <ButtonBlock
                informSpan={props.state.error}
                counter={props.state.counter}
                startValue={props.state.startValue}
                maxCounter={props.state.maxValue}
                clickInc={onClickIncHandler}
                clickRes={onClickResetHandler}/>
        </div>
    );
};

export default Counter;