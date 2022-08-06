import React, {memo, useCallback} from 'react';
import Button from "../../Button";
import s from './SetButtonPreference.module.css'
import {ErrorAC, SetValueAC} from "../../../redux/reducer";
import {useDispatch} from "react-redux";

type SetButtonPreferencePropsType = {
    informSpan: string
}

const SetButtonPreference = memo((props: SetButtonPreferencePropsType) => {
    const dispatch = useDispatch()

    const setCounterValueHandler = useCallback(() => {
        dispatch(SetValueAC())
        dispatch(ErrorAC(''))
    }, [dispatch])

    const classButton = props.informSpan === 'error' ? `${s.disabledBtn} ${s.button}` : s.button
    return (
        <div className={s.buttonBlock}>
            <Button name={'set'} callBack={setCounterValueHandler} class={classButton}/>
        </div>
    );
});

export default SetButtonPreference;