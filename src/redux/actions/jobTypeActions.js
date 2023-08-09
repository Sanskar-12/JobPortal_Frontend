import axios from "axios"
import { server } from "../store"

export const loadJobTypeactions=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"jobTypeLoadRequest"
        })
        const {data}=await axios.get(`${server}/jobType/allJobTypes`,{
            withCredentials:true
        })

        dispatch({
            type:"jobTypeLoadSuccess",
            payload:data
        })


    } catch (error) {
        dispatch({
            type:"jobTypeLoadFail",
            payload:error.response.data.message,
        })
    }
}