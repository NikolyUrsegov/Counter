import React, {memo} from 'react';
import Panel from "./Panel/Panel";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import s from './Counter.module.css';
import s_btn from './ButtonBlock/ButtonBlock.module.css';
import s_cnt from './Panel/Panel.module.css'


type CounterPropsType = {
    maxValue: number
    counter: number
    error: string
    startValue: number
}

const Counter = memo((props: CounterPropsType) => {
    const counterClass = props.counter === props.maxValue || props.error === 'error' ? `${s_cnt.counterBlock} ${s_cnt.counterMax}` : s_cnt.counterBlock
    const incBtnClass = props.counter < props.maxValue && !props.error ? s_btn.button : `${s_btn.button} ${s_btn.disabledBtn}`
    const resetBtnClass = props.counter !== props.startValue && !props.error ? s_btn.button : `${s_btn.button} ${s_btn.disabledBtn}`

    return (
        <div className={s.container}>
            <Panel
                informSpan={props.error}
                counter={props.counter}
                classCounter={counterClass}
            />
            <ButtonBlock
                incBtnClass={incBtnClass}
                resetBtnClass={resetBtnClass}
            />
        </div>
    );
});

export default Counter;