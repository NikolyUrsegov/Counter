import React, {ChangeEvent, useEffect, useState} from 'react';
import PreferencePanel from "./PreferencePanel/PreferencePanel";
import SetButtonPreference from "./SetButtonPreference/SetButtonPreference";
import s from './SetCounter.module.css'

type setCounterPropsType = {
    informSpan: string
    maxValue: number
    startValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setCounterValue: (key: string) => void
    setInformSpan: (value: string) => void
}
const SetCounter = (props: setCounterPropsType) => {
    return (
        <div className={s.container}>
            <PreferencePanel
                informSpan={props.informSpan}
                setInformSpan={props.setInformSpan}
                maxValue={props.maxValue}
                startValue={props.startValue}
                setMaxValue={props.setMaxValue}
                setStartValue={props.setStartValue}
            />
            <SetButtonPreference
                informSpan={props.informSpan}
                setCounterValue={props.setCounterValue}/>
        </div>
    );
};

export default SetCounter;