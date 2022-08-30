
import { AppDispatch } from ".."
import axios from "../../axios/axios"
import { IAirport, ServerResponse } from "../../models/models"
import  { airportSlice } from "../slice/airoportSlice"
import {airportPageSlice} from "../slice/airportPage"


export const fetchAirports = (page: Number=1) => {
    return async (dispatch:AppDispatch) => {
        try {
            dispatch(airportSlice.actions.airportFetching())            
            const res = await axios.get<ServerResponse>("/airports",{
                params:{page}
            })
            dispatch(airportSlice.actions.fetchSucces(res.data)) 
            console.log(res.data.data)
        } catch (error) {
            dispatch(airportSlice.actions.fetchError(error as Error))
        }
    }
}

export const fetchAirportPage = (id:string) =>{
    return async (dispatch:AppDispatch)=>{
        try {
            dispatch(airportPageSlice.actions.airportFetching())
            const res = await axios.get(`/airports/${id}`)
            console.log(res)
            dispatch(airportPageSlice.actions.fetchSucces(res.data))
        } catch (error) {
            console.log(error)
        }
    }
}