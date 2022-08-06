import React, {memo} from 'react';
import s from './Panel.module.css'

type CounterPropsType = {
    counter: number
    informSpan: string
    classCounter: string
}

const Panel = memo((props: CounterPropsType) => {
    return (
        <div className={props.classCounter}>
            {!props.informSpan ? props.counter : props.informSpan}
        </div>
    );
});

export default Panel;