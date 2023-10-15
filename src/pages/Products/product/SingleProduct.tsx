import { useContext } from "react";
import { ProductType } from "../Product.type";
import { CartContext } from "../../../context/CartContext";

interface SingleProductProps {
  product: ProductType;
}

function SingleProduct(props: SingleProductProps) {
  const { title, price, category, createdBy } = props.product;
  const context = useContext(CartContext);
  const productIncart = context.userCart.filter(
    (product) => product.title === title
  );

  const addToCart = () => {
    context.addToCart(title);
  };
  return (
    <div className="m-5 mt-10 shadow p-5 text-sm text-stone-700">
      <img src="/" alt="product img" width={200} height={200} />
      <div className="space-y-1 h-24">
        <h2 className="font-bold">{title}</h2>
        <h2>category: {category}</h2>
        <h2>createdBy: {createdBy}</h2>
      </div>
      <div className="flex justify-center rounded-sm mt-5">
        <button
          className="font-bold text-xl  bg-red-600 text-gray-50 w-full py-2 me-1"
          onClick={addToCart}
        >
          {price}$
        </button>
        <span className="w-1/6 border text-center text-3xl border-red-700 rounded">
          {productIncart[0]?.cartCount | 0}
        </span>
      </div>
    </div>
  );
}

export default SingleProduct;
