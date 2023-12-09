import CartPage from "../pages/cart/view";
import Home from "../pages/home/view";
import Login from "../pages/login/view";
import ProductsPage from "../pages/product-list/view";

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
        path: 'products',
        element: <ProductsPage />
    },  

    {
        path: 'cart',
        element: <CartPage />
    },  

]

export default router;