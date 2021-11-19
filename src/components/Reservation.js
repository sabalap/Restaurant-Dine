import { Link } from "react-router-dom";
import classes from "./Reservation.module.css";
const Reservation = () => {
    return (
        <section className={classes.reservation}>
            <div className={`container ${classes.container}`}>
                <div className={classes["reservation-box"]}>
                    <h2>Ready to make a reservation?</h2>
                    <Link to="/booking" className={classes.button}>book a table</Link>
                </div>
            </div>
        </section>
    )
}
export default Reservation;