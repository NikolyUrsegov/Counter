import React, {ChangeEvent, useEffect, useState} from 'react';
import PreferencePanel from "./PreferencePanel/PreferencePanel";
import SetButtonPreference from "./SetButtonPreference/SetButtonPreference";
import s from './SetCounter.module.css'
import {InitialStateType} from "../../redux/reducer";

type setCounterPropsType = {
    state: InitialStateType
    changeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setCounterValue: () => void
}
const SetCounter = (props: setCounterPropsType) => {
    return (
        <div className={s.container}>
            <PreferencePanel
                informSpan={props.state.error}
                maxValue={props.state.changeMaxValue}
                startValue={props.state.changeStartValue}
                changeMaxValueHandler={props.changeMaxValueHandler}
                changeStartValueHandler={props.changeStartValueHandler}
            />
            <SetButtonPreference
                informSpan={props.state.error}
                setCounterValue={props.setCounterValue}
            />
        </div>
    );
};

export default SetCounter;