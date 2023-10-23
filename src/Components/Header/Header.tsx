import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import LoginLogutBtn from "../Btns/LoginLogutBtn";
function Header() {
  const context = useContext(CartContext);
  const clearLocalStorage=()=>{
    localStorage.clear()
  }
  return (
    <div className="header w-full sm:flex justify-between h-full pb-5 items-center px-10 text-2xl">
      <div className="flex justify-between sm:space-x-10 items-center">
        <img height={100} width={100} src={logo} alt="logo" />
        {localStorage.getItem("storeUsername") ? (
          <h2 className=" font-mono ">{localStorage.getItem("storeUsername")}</h2>
        ) : (
          <Link to="/regester">
            <LoginLogutBtn text="log in" />
          </Link>
        )}
      </div>
      <div className="flex justify-between items-center">
                <button className="relative">
          <Link to="/cart">
            <div className="absolute right-3 bottom-3 text-xs h-5 w-5 text-center text-slate-50 rounded-full bg-red-800">
              {context.userCart.length}
            </div>
            <AiOutlineShoppingCart />
          </Link>
        </button>
        {localStorage.getItem("storeUsername") && (
          <Link to="/login" className="me-3" onClick={clearLocalStorage}>
            <LoginLogutBtn text="log out" />
          </Link>
        )}

      </div>
    </div>
  );
}

export default Header;
