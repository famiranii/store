import Cart from "./pages/Cart/Cart";
import Product from "./pages/Products/Products";
import Regester from "./pages/Regester/Regester";
import Login from "./pages/Login/Login";

const routes = [
  { path: "/", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/regester", element: <Regester /> },
  { path: "/login", element: <Login /> },
];

export default routes
