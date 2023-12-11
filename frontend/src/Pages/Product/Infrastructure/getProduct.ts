import axios, { AxiosResponse } from "axios"
import { Product } from "../Models/product"

const BASE_API = process.env.REACT_APP_BASE_API_URL as string
const PRODUCTS = process.env.REACT_APP_PRODUCTS as string



export const getProduct=async (id:string):Promise<Product>=>{
    let path = BASE_API  +  PRODUCTS + `/${id}`
    const response:AxiosResponse<Product> = await axios.get(path)
    return response.data
}