import { Link, useNavigate } from "react-router-dom";
import { cartLogic } from "../../../Cart/Logic/cartLogic";
import { Product } from "../../../Product/Models/product";

interface ProductCardProps{ 
product:Product,
hasDescription:boolean
}

function ProductCard({product,hasDescription}:ProductCardProps) {
const navigate = useNavigate()

const onProductClick = () =>{
    navigate(`/product/${product._id}`)
}

const onAddToCartClick = () =>{
cartLogic.addToCart(product)
}
    return (
       <div className={`flex flex-col ${hasDescription ?'w-9/12 ':'border-2 w-1/6 ' } gap-2 items-center p-2 cursor-pointer`}>
    <div className="flex flex-col justify-center items-center" onClick={onProductClick}>
     <h1 className="font-bold">{product.name}</h1>
        <img src={product.imagePath} width='200' height={'200'}></img>
       {hasDescription && <p>{product.description}</p>} 
        <p>${product.price}</p>
        </div>
        <button onClick={onAddToCartClick} type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >Add to Cart</button>
        
  </div>
    );
  }
  
  export default ProductCard;