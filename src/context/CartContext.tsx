import { createContext, useState, useEffect } from "react";
import { ProductType } from "../pages/Products/Product.type";

interface CartContextType {
  allProduct: ProductType[];
  addToCart: (title: string) => void;
  userCart:ProductType[]
}
type CartContexProviderProps = {
  children: React.ReactNode;
};
export const CartContext = createContext({} as CartContextType);

function CartContextProvider({ children }: CartContexProviderProps) {
  const [allProduct, setAllProduct] = useState<ProductType[]>([]);
  const [userCart, setUserCart] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("https://api.storerestapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filteredProducts = json.data.map((product: any) => ({
          title: product.title,
          price: product.price,
          category: product.category.name,
          createdBy: product.createdBy.name,
        }));
        setAllProduct(filteredProducts);
      });
  }, []);

  const addToCart = (name: string) => {
    const updatedCart = userCart.map((product) => {
      if (product.title === name) {
        return { ...product, cartCount: product.cartCount + 1 };
      }
      return product;
    });
    setUserCart(updatedCart);
    const isInCart = userCart.find((product) => product.title === name);
    const isInShop = allProduct.find((product) => product.title === name);
    if (!isInCart && isInShop) {
      setUserCart([...userCart, { ...isInShop, cartCount: 1 }]);
    }
  };
  return (
    <CartContext.Provider value={{ allProduct, addToCart ,userCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
