import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useGetProductQuery, useGetProductsQuery } from "../../../pages/Products/View/Hooks/useQueries";
import { SearchProductForm } from "../modules/searchEngine";




function SearchEngine() {

    const { register, handleSubmit, formState: { errors } } = useForm<SearchProductForm>();

    const navigate = useNavigate()
    const onSubmit = (data: SearchProductForm) => {
      navigate('/Products',{state:{query:data.productName}})
    };
  return (
   
   <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-2">
      <input  {...register("productName",{ required: true }) }  className="block flex-1 border-2 bg-transparent py-1.5 pl-1   text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search a product"/>
      {/* errors will return when field validation fails  */}
      {errors.productName && <span>This field is required</span>}
      
      <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >Search</button>
    </form>
  );
}

export default SearchEngine;
