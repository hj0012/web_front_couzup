import Button from "components/atom/Button/Button";
import MyLocationBtn from "components/molecular/buttons/myLocation/MyLocationBtn";
import React from "react";
import style from './MapContainer.module.scss';

const MapContainer = ():React.ReactElement => {
    return <div className={style.container}>
        {/* <Button name="menu" text="햄버거" onClick={()=>{console.log(123)}}></Button> */}
        <div id="map"  className={style.map}/>
        <MyLocationBtn></MyLocationBtn>
    </div>;
}

export default MapContainer;