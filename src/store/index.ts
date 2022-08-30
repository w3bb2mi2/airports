import {combineReducers, configureStore} from '@reduxjs/toolkit'
import airportReducers from './slice/airoportSlice'
import airportPageReducers from './slice/airportPage'


const rootReducer = combineReducers({
    airport: airportReducers,
    airportPage: airportPageReducers
})

export function setupStore(){
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']