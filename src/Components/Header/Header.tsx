import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header w-full flex justify-between h-28 items-center px-10 text-2xl">
      <div className="flex space-x-10 items-center">
        <img height={100} width={100} src={logo} alt="logo" />
        {localStorage.getItem("username") ? (
          <h2>{localStorage.getItem("username")}</h2>
        ) : (
         <Link to="/regester" ><h2>login</h2></Link> 
        )}
      </div>
      <div className="relative">
        <div className="absolute right-3 bottom-3 text-xs h-5 w-5 text-center text-slate-50 rounded-full bg-red-800">
          5
        </div>
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
}

export default Header;
