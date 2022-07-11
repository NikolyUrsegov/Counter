import React from 'react';
import Button from "../../Button";
import s from './ButtonBlock.module.css'

type IncResPropsType = {
    counter: number
    maxCounter: number
    startValue: number
    clickInc: () => void
    clickRes: () => void
    informSpan: string
}

const ButtonBlock = (props: IncResPropsType) => {
    const incBtn = props.counter < props.maxCounter && !props.informSpan ? s.button : `${s.button} ${s.disabledBtn}`
    const resetBtn = props.counter !== props.startValue && !props.informSpan ? s.button : `${s.button} ${s.disabledBtn}`

    return (
        <div className={s.buttonBlock}>
            <Button name={'inc'}
                    callBack={props.clickInc}
                    class={incBtn}/>
            <Button name={'reset'}
                    callBack={props.clickRes}
                    class={resetBtn}/>
        </div>
    );
};

export default ButtonBlock;