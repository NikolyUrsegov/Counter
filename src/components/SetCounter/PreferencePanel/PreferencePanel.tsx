import React, {ChangeEvent} from 'react';
import s from './PreferencePanel.module.css'

type PreferencePanelPropsType = {
    informSpan: string
    maxValue: number
    startValue: number
    changeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}
const PreferencePanel = (props: PreferencePanelPropsType) => {
    const classInput = props.informSpan === 'error' ? s.active : ''
    return (
        <div className={s.counterBlock}>
            <div className={s.item}>
                <span>max value:</span>
                <input
                    className={classInput}
                    type={"number"}
                    value={props.maxValue}
                    onChange={(e) => props.changeMaxValueHandler(e)}
                />
            </div>
            <div className={s.item}>
                <span>start value:</span>
                <input
                    className={classInput}
                    type={"number"}
                    value={props.startValue}
                    onChange={(e) => props.changeStartValueHandler(e)}
                />

            </div>
        </div>
    );
};

export default PreferencePanel;
