import classes from "./CartHeader.module.css";
import logo from "../images/logo.svg"
import {BsCart} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext} from "react";
import CartContext from "../store/cart-context";
const CartHeader = () => {
    const cartCtx = useContext(CartContext);
    const {products} = cartCtx;
    const totalAmount = products.reduce((sum,item) => {
        return sum + item.amount
    },0);
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes["header-container"]}>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Link to="/cart" className={classes["cart-icon"]}>
                        <span className={classes.amount}>{totalAmount}</span>
                        <BsCart />
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default CartHeader;