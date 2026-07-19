import { log } from "console";
import React from "react";

export default function DynamicSearch(props:any){
    const myParams: String[] = props.params.myParams;
    const category = myParams[0];
    const group = myParams[1];
    const brand = myParams[2];
    const modelNo = myParams[3];
    return <div>DynamicSearch{category}</div>
}