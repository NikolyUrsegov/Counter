import React, {ChangeEvent, memo} from 'react';
import PreferencePanel from "./PreferencePanel/PreferencePanel";
import SetButtonPreference from "./SetButtonPreference/SetButtonPreference";
import s from './SetCounter.module.css'

type setCounterPropsType = {
    error: string
    changeMaxValue: number
    changeStartValue: number
}
const SetCounter = memo((props: setCounterPropsType) => {
    return (
        <div className={s.container}>
            <PreferencePanel
                informSpan={props.error}
                maxValue={props.changeMaxValue}
                startValue={props.changeStartValue}
            />
            <SetButtonPreference
                informSpan={props.error}
            />
        </div>
    );
});

export default SetCounter;