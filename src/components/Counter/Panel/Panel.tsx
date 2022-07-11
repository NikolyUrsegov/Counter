import React from 'react';
import s from './Panel.module.css'

type CounterPropsType = {
    counter: number
    maxCounter: number
    informSpan: string
}

const Panel = (props: CounterPropsType) => {
    const classCounter = props.counter === props.maxCounter || props.informSpan === 'error' ? `${s.counterBlock} ${s.counterMax}` : s.counterBlock
    return (
        <div className={classCounter}>
            {!props.informSpan ? props.counter : props.informSpan}
        </div>
    );
};

export default Panel;