import React from 'react';
import Button from "../../Button";
import s from './SetButtonPreference.module.css'

type SetButtonPreferencePropsType = {
    informSpan: string
    setCounterValue: (key: string) => void
}

const SetButtonPreference = (props: SetButtonPreferencePropsType) => {
    const setCounterValueHandler = () => {
        props.setCounterValue('counter')
    }
    const classButton = props.informSpan === 'error' ? `${s.disabledBtn} ${s.button}` : s.button
    return (
        <div className={s.buttonBlock}>
            <Button name={'set'} callBack={setCounterValueHandler} class={classButton}/>
        </div>
    );
};

export default SetButtonPreference;