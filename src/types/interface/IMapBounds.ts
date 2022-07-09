import ICoordinate from './ICoordinate';

export interface IMapPointBounds {
    minPoint:ICoordinate;
    maxPoint:ICoordinate;
} 

export interface IMapPointBoindsLiteral {
    MinX:number;
    MinY:number;
    MaxX:number;
    MaxY:number;
}