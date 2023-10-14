import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SingleProduct from "./product/SingleProduct";
import { ProductType } from "./Product.type";
function Products() {
  const [allProduct, setAllProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("https://api.storerestapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data[1]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filteredProducts = json.data.map((product:any) => ({
          title: product.title,
          price: product.price,
          category: product.category.name,
          createdBy: product.createdBy.name,
        }));
        setAllProduct(filteredProducts);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="grid grid-cols-4">
        {allProduct.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
