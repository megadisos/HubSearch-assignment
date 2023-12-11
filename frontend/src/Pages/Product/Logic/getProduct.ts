import { getProduct } from "../Infrastructure/getProduct"
import { Product } from "../Models/product"

/**
 * Get a Product
 * @param id product Id
 * @returns {Product} Devuelve un  producto.
 */
export const getProductById = (id:string):Promise<Product> =>{
    return getProduct(id)
}
