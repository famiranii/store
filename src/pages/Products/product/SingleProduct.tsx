import { useContext } from "react";
import { ProductType } from "../Product.type";
import { CartContext } from "../../../context/CartContext";

interface SingleProductProps {
  product: ProductType;
}

function SingleProduct(props: SingleProductProps) {
  const context = useContext(CartContext);
  const addToCart = () => {    
    context.addToCart(title);
  };
  const { title, price, category, createdBy } = props.product;
  return (
    <div className="m-5 mt-10 shadow p-5 text-sm text-stone-700">
      <img src="/" alt="product img" width={200} height={200} />
      <div className="space-y-1 h-24">
        <h2 className="font-bold">{title}</h2>
        <h2>category: {category}</h2>
        <h2>createdBy: {createdBy}</h2>
      </div>
      <div className="flex justify-center bg-red-600 rounded-sm py-2 mt-5">
        <button className="font-bold text-xl text-gray-50 w-full" onClick={addToCart}>
          {price}$
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
