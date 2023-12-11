import { Product } from "../../product/modules/product"

export const addToCart = (product:Product)=>{

    const cartProdcuts = localStorage.getItem('cart-products')
    if (cartProdcuts === null) return localStorage.setItem('cart-products',JSON.stringify([product]))
    if (cartProdcuts !== null){
        let currentProducts = JSON.parse(cartProdcuts)
        currentProducts = [...currentProducts,product]
        localStorage.setItem('cart-products',JSON.stringify(currentProducts))
    }
    
}

