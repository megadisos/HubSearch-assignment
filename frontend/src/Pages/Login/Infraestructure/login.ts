import axios from "axios"
import { ILoginForm } from "../Models/Login"


const BASE_URL = process.env.REACT_APP_BASE_API_URL as string
const AUTH = process.env.REACT_APP_BASE_AUTH as string

export const loginApi = async (loginData:ILoginForm) =>{
    const LOGIN = process.env.REACT_APP_PRODUCTS_LOGIN as string
    const path = BASE_URL +  AUTH + LOGIN
    const response = await axios.post(path,loginData)
    return response.data
}