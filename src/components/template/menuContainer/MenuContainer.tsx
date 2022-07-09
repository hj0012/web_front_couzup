import BackBtn from "components/molecular/buttons/backbtn/BackBtn";
import React, { MouseEventHandler } from "react";
import style from "./MenuContainer.module.scss";

interface IContainerProps {
    content:React.ReactElement;
}
const MenuContainer  = (props:IContainerProps):React.ReactElement => {
    return <div className={style.container}>
       <BackBtn></BackBtn>
        <section className={style.content}>
            {props.content}
        </section>
    </div>
}

export default MenuContainer;