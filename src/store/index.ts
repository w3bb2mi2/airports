import {combineReducers, configureStore} from '@reduxjs/toolkit'
import airportReducers from './slice/airoportSlice'
import airportPageReducers from './slice/airportPage'
import selectedSearchReducers from './slice/handbookSlice'



const rootReducer = combineReducers({
    airport: airportReducers,
    airportPage: airportPageReducers,
    selectedSearch: selectedSearchReducers
})

export function setupStore(){
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']