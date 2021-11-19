import classes from "./ReservationSuccess.module.css";
import { Link } from "react-router-dom";
const ReservationSuccess = () => {
    return (
        <section className={classes["reservation-success"]}>
            <h1>Your Reservation completed successfuly!</h1>
            <h3>Thank You!</h3>
            <Link to="/" className={classes.button}>Back HomePage</Link>
        </section>
    )
}
export default ReservationSuccess;