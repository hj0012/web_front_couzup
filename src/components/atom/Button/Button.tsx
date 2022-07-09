import classnames from "classnames";
import React, { MouseEventHandler, } from "react";
import style from './Button.module.scss';

interface IButtonProps {
    name:string;
    onClick:MouseEventHandler<HTMLDivElement>;
    child?:React.ReactElement
}

const Button = (props:IButtonProps): React.ReactElement => {
    return <div className={classnames(style[props.name])} onClick={props.onClick}>
        {props.child}
    </div>;
}

export default Button;