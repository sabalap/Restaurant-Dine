import logo from "../images/logo.svg";
import BookingForm from "../components/BookingForm";
import Decoration from "../components/Decoration";
import classes from "./Booking.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const Booking = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className="container">
                    <Link to="/">
                    <img src={logo} alt="" />
                    </Link>
                    <div className={classes["booking-container"]}>
                        <div className={classes.info}>
                            <h1>Reservations</h1>
                            <p>We can’t wait to host you. 
                                If you have any special requirements please feel free to call 
                                on the phone number below.
                                We’ll be happy to accommodate you.
                            </p>
                        </div>
                        <BookingForm />
                    </div>
                </div>
            </header>
            <Decoration />
        </Fragment>
    )
}
export default Booking;