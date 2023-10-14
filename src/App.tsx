import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import CartContextProvider from "./context/CartContext";

function App() {
  const router = useRoutes(routes);
  return (
    <CartContextProvider>
      {router}
    </CartContextProvider>
  );
}

export default App;
