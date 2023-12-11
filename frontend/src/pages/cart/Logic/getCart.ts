import { Product } from "../../product/modules/product";

export const getCart = ()=>{
    const cartProdcuts = localStorage.getItem('cart-products')
    if (cartProdcuts === null) return []
    let currentProducts = JSON.parse(cartProdcuts)
    return Array.from(new Set(currentProducts.map((obj:Product) => obj._id))).map(id => {
        return currentProducts.find((obj:Product) => obj._id === id);
    });
    
}



export const getProductQuantityOnCart = (productId:string) =>{
    const cartProdcuts = localStorage.getItem('cart-products')
    if (cartProdcuts === null) return 0
    const currentProducts = JSON.parse(cartProdcuts)
    return currentProducts.reduce((acumulator: number,product: Product)=>{
        if(product._id === productId) acumulator += 1 
        return acumulator
    },0)
}