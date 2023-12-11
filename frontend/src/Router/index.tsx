import { Children } from "react";
import CartPage from "../Pages/Cart/View";
import Home from "../Pages/Home/View";
import Login from "../Pages/Login/View";
import Authenticated from "../Pages/Login/View/Components/authenticationChecker";
import Product from "../Pages/Product/View";
import ProductsPage from "../Pages/Products/View";
import Profile from "../Pages/Profile/View";

const router= [
    {
      path: '/',
      element: <Home />
    },
    {
        path: 'login',
        element: <Login />
      },
      {
        path: 'profile',
        element: <Authenticated><Profile /></Authenticated>
      },
      {
        path:'/product/:id',
        element: <Product />
        },  
    {
        path: 'products',
        element: <ProductsPage />,
    },  

    {
        path: 'cart',
        element: <CartPage />
    },  

]

export default router;