import ProductInCart from "./productInCart/productInCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
function Cart() {
  const context = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    const total = context.userCart.reduce((acc, product) => {
      return acc + product.cartCount * product.price;
    }, 0);
    setTotalPrice(total);
  }, [context.userCart]);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6 w-1/2">
        <h1 className="text-3xl font-semibold mb-12">Shopping Cart</h1>
        {!totalPrice && (
          <h2 className="text-2xl mb-5 bg-red-600 p-3 text-white font-semibold">
            there isnt any product in cart
          </h2>
        )}
        {context.userCart.map((product, index) => (
          <ProductInCart key={index} {...product} />
        ))}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Total</span>
            <span className="text-gray-900">{totalPrice}$</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
