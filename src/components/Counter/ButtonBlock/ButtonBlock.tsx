import React, {memo, useCallback} from 'react';
import Button from "../../Button";
import s from './ButtonBlock.module.css'
import {useDispatch} from "react-redux";
import {CounterAC, ResetCounterAC} from "../../../redux/reducer";

type IncResPropsType = {
    incBtnClass: string
    resetBtnClass: string
}

const ButtonBlock = memo((props: IncResPropsType) => {
    const dispatch = useDispatch()

    const onClickIncHandler = useCallback(() => {
        dispatch(CounterAC())
    }, [dispatch])
    const onClickResetHandler = useCallback(() => {
        dispatch(ResetCounterAC())
    }, [dispatch])

    return (
        <div className={s.buttonBlock}>
            <Button name={'inc'}
                    callBack={onClickIncHandler}
                    class={props.incBtnClass}/>
            <Button name={'reset'}
                    callBack={onClickResetHandler}
                    class={props.resetBtnClass}/>
        </div>
    );
});

export default ButtonBlock;