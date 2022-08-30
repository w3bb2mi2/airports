import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAirport, ServerResponse } from "../../models/models"

interface AirportState {
    loading: boolean
    error: string,
    airports: IAirport[]
    currentPage: number
    total: number
}

const initialState: AirportState = {
    loading: false,
    error: "",
    airports: [],
    currentPage: 1,
    total: 0
}

export const airportSlice = createSlice({
    name: "airport",
    initialState,
    reducers:{
        airportFetching(state){
            state.loading = true            
        },
        fetchSucces(state, action:PayloadAction<ServerResponse>){
            state.loading = false
            state.airports = action.payload.data
            state.error = ""
            state.currentPage = Number(action.payload.links.self.replace(/\D/g, ""))
            state.total = Number(action.payload.links.last.replace(/\D/g, ""))-150
        },
        fetchError(state, action: PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }
    }

})

export default airportSlice.reducer