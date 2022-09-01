import { createSlice } from "@reduxjs/toolkit"
import { IAirportCountries, IAirportRegion, IAirportType } from "../../models/models"

interface HandbookState{
    loading: boolean
    types: IAirportType[]
    regions: IAirportRegion[]
    country: IAirportCountries[]
}

const initialState:HandbookState = {
    loading: false,
    types: [],
    regions: [],
    country:[]
}

export const handbookSlice = createSlice({
    name: "handbook",
    initialState,
    reducers:{
        handbookReducer(state, action){
            let conuntries:string[] = Array.from(new Set(action.payload))
            state.country = conuntries

        }
    }
})

export default handbookSlice.reducer