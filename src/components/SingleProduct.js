import classes from "./SingleProduct.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
const SingleProduct = ({product}) => {
    const {image,category,name,price,id} = product;
    const cartCtx = useContext(CartContext);
    const {addProduct} = cartCtx;
    const addToCartHandler = () => {
        addProduct({
        id,
        name,
        price,
        amount:1,
        image
        })
    }
    return (
        <div className={classes.single}>
            <p className={classes["mobile-text"]}>For Order Hold Image</p>
            <div className={classes.img}>
                <img src={image} alt={name} />
                <button className={classes.button} onClick={addToCartHandler}>
                    Order
                </button>
            </div>
            <h2>{name}</h2>
            <h4>Category: {category}</h4>
            <p>${price}</p>
        </div>
    )
}
export default SingleProduct;