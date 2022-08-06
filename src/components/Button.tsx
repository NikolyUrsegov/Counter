import React, {memo} from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    class: string
}

const Button = memo((props: ButtonPropsType) => {
    return <button className={props.class} onClick={props.callBack}>{props.name}</button>
})


export default Button;