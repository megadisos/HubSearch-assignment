import { Product } from '../../../product/modules/product';
import { productsLogic } from '../../Logic/productsLogic';
import {
    useQueryClient,
    useQuery,
    UseQueryResult
  } from 'react-query'
import { productLogic } from '../../../product/Logic/productLogic';




/**React query for get all dashboards*/
export const useGetProductsQuery = (): UseQueryResult<Product[]> => { 
    return useQuery('Products',productsLogic.getAllProducts)
  };

 /**React query for get all dashboards*/
export const useGetProductQuery = (id:string): UseQueryResult<Product> => { 
    return useQuery('Product',()=>productLogic.getProductById(id))
  };

  