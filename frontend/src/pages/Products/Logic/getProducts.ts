import { Product } from "../../product/modules/product"
import { getProducts } from "../Infraestructure/getProducts"

/**
 * Get list of All products
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const getAllProducts = ():Promise<Product[]> =>{
    return getProducts()
}
