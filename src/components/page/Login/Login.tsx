import LoginContentBox from "components/organisms/login/LoginContentBox";
import MenuContainer from "components/template/menuContainer/MenuContainer";
import React from "react";
import style from "./Login.module.scss";

const Login = ():React.ReactElement => {
    return <div className={style.login}>
        <MenuContainer content={<LoginContentBox></LoginContentBox>}></MenuContainer>
    </div>;
}

export default Login;