
import { TBoundsLiteral } from "types/type/TMapBoundsLiteral";
import { TBounds } from '../type/TMapBounds';
import { TMapCoordsLiteral } from '../type/TMapCoordsLiteral';


export default interface IMapOptions {
    background:string;
    baseTileOpacity:number;
    bounds: TBounds|TBoundsLiteral;
    center:TMapCoordsLiteral;
}