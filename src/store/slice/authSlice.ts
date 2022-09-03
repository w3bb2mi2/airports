import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface AuthState{
    access?:string
    username: string
    isAuth: boolean
}

const initialState: AuthState = {
    access:"",
    username:"",
    isAuth: false
}

export  interface AuthPayload{
    access:string,
    username:string
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action: PayloadAction<AuthPayload>){
            console.log(action)
            state.access = action.payload.access
            state.username = action.payload.username
            state.isAuth = true
        }
    }
}) 

export default authSlice.reducer