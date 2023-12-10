import { useNavigate } from "react-router-dom";
import Layout from "../../../shared/layout/view";
import { Product } from "../../product/modules/product";
import { cartLogic } from "../Logic/cartLogic";


function CartPage() {

  const cartProducts:Product[] = cartLogic.getCart() 
const navigate = useNavigate()
  const onDeleteOneProduct = (productId:string) =>{
    cartLogic.deleteOneProductFromCart(productId)
    window.location.reload();
  }

  const onDeleteProduct = (productId:string) =>{
    cartLogic.deleteOneProductFromCart(productId)
    window.location.reload();
  }
  return (
    <Layout>
      <>
    
<h1 className="font-bold text-center mt-2 text-4xl">Cart</h1>
    <table className="table-fixed w-full mt-5">
    <thead className={`border-2 `}>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className="border-2">    
    {cartProducts && cartProducts?.length > 0 && cartProducts?.map((product,index)=>{
      const quantity = cartLogic.getProductQuantityOnCart(product._id as string)
      const tdStyles = "border-2 text-center p-2"
      return(
        <tr className="border-2 p-2">
        <td className={tdStyles+" font-bold"}>{index +1}</td>
        <td className={tdStyles+" font-bold"}>{product.name}</td>
        <td className={tdStyles}>{product.description}</td>
        <td className={tdStyles}>{product.price}</td>
        <td className={tdStyles}>{quantity}</td>
        <td className={tdStyles}>${quantity * product.price}</td>
        <td className="flex justify-center gap-2 mt-2"> <button onClick={()=>onDeleteOneProduct(product._id as string)} type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >Delete one</button>
        <button onClick={()=>onDeleteProduct(product._id as string)} type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >Delete all</button>
        </td>
        </tr>
      )
    })}
      </tbody>
      </table>
<div className="flex flex-col gap-2">

    </div>
    </>
    </Layout>
  );
}

export default CartPage;
