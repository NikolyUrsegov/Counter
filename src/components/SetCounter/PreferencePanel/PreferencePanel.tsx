import React, {ChangeEvent} from 'react';
import s from './PreferencePanel.module.css'
import Button from "../../Button";

type PreferencePanelPropsType = {
    informSpan: string
    setInformSpan: (value: string) => void
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
}
const PreferencePanel = (props: PreferencePanelPropsType) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value);
        props.setInformSpan('enter set')
        if (+e.currentTarget.value <= props.startValue) {
            props.setInformSpan('error')
        } else if (+e.currentTarget.value <= 0) {
            props.setInformSpan('error')
        }
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
        props.setInformSpan('enter set')
        if (+e.currentTarget.value >= props.maxValue) {
            props.setInformSpan('error')
        } else if (+e.currentTarget.value < 0) {
            props.setInformSpan('error')
        }
    }
    const classInput = props.informSpan === 'error' ? s.active : ''
    return (
        <div className={s.counterBlock}>
            <div className={s.item}>
                <span>max value:</span>
                <input
                    className={classInput}
                    type={"number"}
                    value={props.maxValue}
                    onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={s.item}>
                <span>start value:</span>
                <input
                    className={classInput}
                    type={"number"}
                    value={props.startValue}
                    onChange={onChangeStartValueHandler}
                />

            </div>
        </div>
    );
};

export default PreferencePanel;
