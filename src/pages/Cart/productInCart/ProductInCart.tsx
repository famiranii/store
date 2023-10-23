import { ProductType } from "../../Products/Product.type";

function ProductInCart(props: ProductType) {
  console.log(props);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
        <h2 className="text-xl font-semibold">Product Name</h2>
        <span className="text-gray-600">Price</span>
      </div>
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
        <div className="flex items-center space-x-4">
          <img
            src={props.img}
            alt="Product"
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h3 className="text-lg font-medium">{props.title}</h3>
            <p className="text-gray-600">{props.category}</p>
          </div>
        </div>
        <div className="text-gray-600 text-right">
          <span className=" ">{props.price}$</span>
          <br />
          <span>count : {props.cartCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
