import logo from "../images/logo.svg"
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import {BsCart} from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../store/cart-context";
const Header = () => {
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
                <h1>Exquisite dining since 1989</h1>
                <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <Link to="/booking" className={classes.button}>
                    book a table
                </Link>
            </div>
        </header>
    )
}
export default Header;