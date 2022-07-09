import Button from "components/atom/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./BackBtn.module.scss";

const BackBtn = ():React.ReactElement => {
    const navigate = useNavigate();
    const onClickBackBtn = ():void => {
        navigate("/");
    }
    return <div className={style["back-btn-warp"]}>
        <Button name="back" onClick={onClickBackBtn}></Button>
    </div>
}

export default BackBtn;