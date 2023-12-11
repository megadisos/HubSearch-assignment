import { Product } from "../../Product/Models/product"

export const deleteProductFromCart = (productId:string) =>{
    const cartProdcuts = localStorage.getItem('cart-products')
    if (cartProdcuts === null) return 
    const currentProducts:Product[] = JSON.parse(cartProdcuts).filter((prod:Product)=>prod._id !== productId)
    localStorage.setItem('cart-products',JSON.stringify(currentProducts))
}


export const deleteOneProductFromCart = (productId: string) => {
    const cartProducts = localStorage.getItem('cart-products');
    
    if (cartProducts === null) return;
  
    const currentProducts = JSON.parse(cartProducts);
    
    const indexToRemove = currentProducts.findIndex((product: Product) => product._id === productId);
  
    if (indexToRemove !== -1) {
      currentProducts.splice(indexToRemove, 1);
  
      localStorage.setItem('cart-products', JSON.stringify(currentProducts));
    }
  };