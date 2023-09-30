import Cart from "./pages/Cart/Cart";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Product from "./pages/Product/Product";
import Regester from "./pages/Regester/Regester";

const routes = [
  { path: "/", element: <Product /> },
  { path: "/panel", element: <AdminPanel /> },
  { path: "/cart", element: <Cart /> },
  { path: "/regester", element: <Regester /> },
];

export default routes
