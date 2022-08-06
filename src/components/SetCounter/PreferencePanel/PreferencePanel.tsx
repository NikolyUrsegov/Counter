import React, {memo} from 'react';
import s from './PreferencePanel.module.css'
import {ChangeMaxValueAC, ChangeStartValueAC} from "../../../redux/reducer";
import {useDispatch} from "react-redux";

type PreferencePanelPropsType = {
    informSpan: string
    maxValue: number
    startValue: number
}
const PreferencePanel = memo((props: PreferencePanelPropsType) => {
    const dispatch = useDispatch()

    const classInput = props.informSpan === 'error' ? s.active : ''
    return (
        <div className={s.counterBlock}>
            <div className={s.item}>
                <span>max value:</span>
                <input
                    className={classInput}
                    type={"number"}
                    value={props.maxValue}
                    onChange={(e) => dispatch(ChangeMaxValueAC(+e.currentTarget.value))}
                />
            </div>
            <div className={s.item}>
                <span>start value:</span>
                <input
                    className={classInput}
                    type={"number"}
                    value={props.startValue}
                    onChange={(e) => dispatch(ChangeStartValueAC(+e.currentTarget.value))}
                />

            </div>
        </div>
    );
});

export default PreferencePanel;
