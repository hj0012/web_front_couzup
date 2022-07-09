
export function useMap() {
    const initMap = ():naver.maps.Map => {
        return new naver.maps.Map('map', createMapOptions());
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const createMapOptions = () :naver.maps.MapOptions => {
        return {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 60,
            logoControl:false,
        }
    }
    
    return { initMap };
}
