import { Children } from "react";
import CartPage from "../pages/cart/view";
import Home from "../pages/home/view";
import Login from "../pages/login/view";
import Authenticated from "../pages/login/view/components/authenticationChecker";
import Product from "../pages/product/View";
import ProductsPage from "../pages/Products/View";
import Profile from "../pages/Profile/View";

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