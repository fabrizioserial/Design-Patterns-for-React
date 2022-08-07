import {useEffect, useState} from "react";
import {Rocket} from "../../common/types";
import {getRockets} from "../api";

const useRockets = () => {

    const [rockets,setRockets] = useState<Rocket[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        (async()=>{
            const response = await getRockets();
            setRockets(response)
        })()
        setLoading(false)
    },[])

    return {data: rockets , loading}

}
export default useRockets