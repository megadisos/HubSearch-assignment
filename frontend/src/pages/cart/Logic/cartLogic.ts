import { deleteOneProductFromCart, deleteProductFromCart } from "./deleteCart";
import { getCart, getProductQuantityOnCart } from "./getCart";
import { addToCart } from "./postCart";

export const cartLogic = {
    addToCart,
    getCart,
    getProductQuantityOnCart,
    deleteOneProductFromCart,
    deleteProductFromCart
}