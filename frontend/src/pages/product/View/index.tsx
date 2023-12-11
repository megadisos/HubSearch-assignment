import { useLocation } from "react-router-dom";
import Layout from "../../../shared/layout/view";
import ProductCard from "../../Products/View/Components/productCard";
import { useGetProductQuery } from "../../Products/View/Hooks/useQueries";


function Product() {

const location =  useLocation()
const pathArray = location.pathname.split('/')
const id = pathArray[pathArray .length -1]
const productQuery = useGetProductQuery(id)

    return (
  <Layout>
    <div className="flex flex-col justify-center items-center mt-5 h-full">
    {productQuery.data && <ProductCard product={productQuery.data} hasDescription={true}/>}
    </div>
  </Layout>
    );
  }
  
  export default Product;
  