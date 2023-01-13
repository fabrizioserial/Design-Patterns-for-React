import React, {useEffect, useState} from "react";
import Card from "../Card";
import {getItems} from "../../api";

export default function CardContainer(){
    const [items,setItems] = useState<{title:string,description:string,image:string}[]>([])

    useEffect(()=>{
      (async ()=> await setItems(getItems()))()
    },[])

    return(
        <Card items={items} />
    )
}