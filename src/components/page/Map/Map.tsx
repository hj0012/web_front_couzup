import MapContainer from "components/template/mapContainer/MapContainer";
import { useMap } from "hooks/mapAPI/useMap";
import React, { useEffect } from "react";
import style from './Map.module.scss';

const Map = (): React.ReactElement => {
    const { initMap } = useMap();
    useEffect(() => {
        initMap();
    }, []);

    return <div className={style.warp}>
        <MapContainer/>
    </div>;
}

export default Map;
