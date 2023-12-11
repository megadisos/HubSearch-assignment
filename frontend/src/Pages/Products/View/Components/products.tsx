import { Link, useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../Hooks/useQueries";
import ProductCard from "./productCard";

function Products() {

  const productsQuery = useGetProductsQuery()

  const products = productsQuery.data

  const location = useLocation();
  const { state } = location;


  const filteredProducts = state
  ? products && products.filter(product => {
      return state.query ? product.name.toLowerCase().includes(state.query.toLowerCase()) : true;
    })
  : products;
    return (
  <div className="flex flex-col mt-2">
      <h1 className="font-bold self-center mb-2">{state ? "Search Results":"Our Products"}</h1>
      <div className="flex flex-row gap-2 justify-center p-2">
      {filteredProducts && filteredProducts.map(product=>{
        return(
          <ProductCard  product={product} hasDescription={false}/>
        )
      })}
      {filteredProducts && filteredProducts.length === 0 && <h1>No products</h1>}
</div>
  </div>
    );
  }
  
  export default Products;
  