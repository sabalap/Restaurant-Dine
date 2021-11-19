import classes from "./OrderSuccess.module.css";
import { Link } from "react-router-dom";
const OrderSuccess = () => {
    return (
        <section className={classes["order-success"]}>
            <h1>Your Order completed successfuly!</h1>
            <h3>Thank You!</h3>
            <Link to="/" className={classes.button}>Back HomePage</Link>
        </section>
    )
}
export default OrderSuccess;