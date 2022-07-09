import Button from "components/atom/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IMyLocationBtnProps {
    text:string;

}
const MyLocationBtn = ():React.ReactElement =>{
    const history = useNavigate();
    const onClick = (): void => {
        history("/login")
    }
    const createChildElement = ():React.ReactElement => {
        return <><span className="icon"></span><span className="text">현재위치</span></>;
    }
    return <Button name="my-loc" onClick={onClick} child={createChildElement()}></Button>
}

export default MyLocationBtn;