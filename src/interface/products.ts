export interface IProducts {
    name:string;
    children: {id?:number,name:string,age:number}[];
}