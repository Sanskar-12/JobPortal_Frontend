import axios from "axios"
import { server } from "../store"

export const loadJobactions=(pageNumber, keyword = '', cat = '', location = '')=>async(dispatch)=>{
    try {
        dispatch({
            type:"jobLoadRequest"
        })
        const {data}=await axios.get(`${server}/job/alljobs/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`,{
            withCredentials:true
        })

        dispatch({
            type:"jobLoadSuccess",
            payload:data
        })


    } catch (error) {
        dispatch({
            type:"jobLoadFail",
            payload:error.response.data.message,
        })
    }
}

export const loadsingleJobactions=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"singlejobLoadRequest"
        })
        const {data}=await axios.get(`${server}/job/find/${id}`,{
            withCredentials:true
        })

        dispatch({
            type:"singlejobLoadSuccess",
            payload:data
        })


    } catch (error) {
        dispatch({
            type:"singlejobLoadFail",
            payload:error.response.data.message,
        })
    }
}