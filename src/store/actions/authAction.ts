import axios from "axios";
import { AppDispatch } from "..";
import {AuthPayload, authSlice} from '../slice/authSlice'
export const register = (values: any) =>{
    return async (dispatch:any) =>{
        try {
            const res = await axios.post("http://localhost:5000/registration", {
              values
            })
           dispatch(authSlice.actions.login(res.data))
        } catch (error) {
            console.log(error)            
        }
    }
}