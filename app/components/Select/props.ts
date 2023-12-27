interface SelectProps {
    items:Array<{lable:string , value:string}> ,
    onChange:(id:string)=>void,
    value:string | number,
    fullWidth?:boolean,
    placeHolder?:string,
    label?:string,
    error?:boolean

}