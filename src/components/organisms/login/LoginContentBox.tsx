import KakaoBtn from "components/molecular/buttons/login/kakaoBtn/KakaoBtn";
import React from "react";
import style from './LoginContentBox.module.scss';

const LoginContentBox = ():React.ReactElement =>{
    return <div id="login" className={style["content-warp"]}>
        <div className={style['main-title']}>
            <span>로그인</span>
        </div>
        <div className={style['login-btns']}>
            <KakaoBtn></KakaoBtn>
        </div>
    </div>
}
export default LoginContentBox;