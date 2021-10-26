import { useState, useEffect } from "react";
import axios from "axios"

export function useRequestData(url){
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get(url)
       .then((res)=>{
           setData(res.data)
       })
       .catch((error)=>{
           console.log(error.response)
       })
    },[url])

    return data
}