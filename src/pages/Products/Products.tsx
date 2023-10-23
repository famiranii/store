import { useContext } from "react";
import Header from "../../Components/Header/Header";
import SingleProduct from "./product/SingleProduct";
import { CartContext } from "../../context/CartContext";
function Products() {
  const context = useContext(CartContext);
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {context.allProduct.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
