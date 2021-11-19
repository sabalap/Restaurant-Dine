import { Fragment } from "react"
import Header from "../components/Header";
import classes from "./Cart.module.css";
import CartProduct from "../components/CartProduct";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";
import { useContext } from "react";
const Cart = () => {
    const cartCtx = useContext(CartContext);
    const {products} = cartCtx;
    const totalPrice = products.reduce((sum,item) => {
        return sum + item.amount * item.price
    },0)
    const {clearCart} = cartCtx;
    return (
        <Fragment>
            <Header />
            <section className={classes["cart-section"]}>
                <div className="container">
                    <h1>Exquisite dining since 1989</h1>
                    <p className={classes.desc}>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                    {products.length > 0 ? <h2 className={classes["cart-title"]}>Your Cart</h2> : <h2 className={classes["cart-title"]}>Your Cart Is Empty</h2>}
                    <div className={classes["products-container"]}>
                        {products.map(product => (
                            <CartProduct key={product.id} product={product} />
                        ))}
                    </div>
                    <h4 className={classes.total}>Total Price: ${totalPrice.toFixed(2)}</h4>
                    <div className={classes["cart-button-container"]}>
                        <Link to="/menu" className={classes.button}>Menu</Link>
                        {products.length > 0 && <Link to="/cart/order" onClick={clearCart} className={classes.button}>Order</Link>}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Cart;