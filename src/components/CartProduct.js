import classes from "./CartProduct.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
const CartProduct = ({product}) => {
    const {name,id,price,amount,image} = product; 
    const {removeProduct} = useContext(CartContext);
    return (
        <div className={classes.product}>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>x {amount}</h4>
            <p>${price}</p>
            <button className={classes.button} onClick={() => removeProduct(id)}>Remove Product</button>
        </div>
    )
}
export default CartProduct;