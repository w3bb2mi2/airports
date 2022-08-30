import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAirportDataForPage } from "../../models/models";



const initialState = {
    loading: false,
    error: "",
    data: {
        airportName: "",
        airportCity:"",
        airportCountry:"",

    }
}
export const airportPageSlice = createSlice({
    name: "airportPage",
    initialState,
    reducers: {
        airportFetching(state){
            state.loading = true            
        },
        fetchSucces(state, action:PayloadAction<IAirportDataForPage>){
            state.loading = false 
            console.log(action.payload)
            state.data.airportCity = action.payload.data.attributes.city
            state.data.airportCountry = action.payload.data.attributes.country
            state.data.airportName = action.payload.data.attributes.name
        }
    }
})

export default airportPageSlice.reducer