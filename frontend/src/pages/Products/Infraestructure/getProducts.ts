import axios, { AxiosResponse } from "axios"
import { Product } from "../../product/modules/product"

const BASE_API = process.env.REACT_APP_BASE_API_URL as string
const PRODUCTS = process.env.REACT_APP_PRODUCTS as string



export const getProducts=async ():Promise<Product[]>=>{
    let path = BASE_API  +  PRODUCTS
    const response:AxiosResponse<Product[]> = await axios.get(path)
    return response.data
}