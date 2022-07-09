import Button from "components/atom/Button/Button";
import React from "react";

const KakaoBtn = ():React.ReactElement => {
    const onClicked = ():void => {
        console.log("카카오 로그인 기능 붙여야함.")
    }

    const createChildEl = ():React.ReactElement => {
        return <><span></span><span>카카오로 로그인</span></>;
    }
    return <Button name="for-kakao" onClick={onClicked} child={createChildEl()}></Button>;
}

export default KakaoBtn