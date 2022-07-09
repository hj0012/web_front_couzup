export interface IMapLatlng {
    lat:number;
    lng:number;   
}

export interface IMapLatLngBound {
    sw:IMapLatlng;
    ne:IMapLatlng;
}

export interface IMapLatLngBoundsLiteral {
    north:number;
    east:number;
    south:number;
    west:number;
}