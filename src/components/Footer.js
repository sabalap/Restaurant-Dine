import logo from "../images/logo.svg";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes["footer-container"]}>
                    <Link to="/">
                        <div className="img">
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                    <ul className="location">
                        <li>MARTHWAITE, SEDBERGH</li>
                        <li>CUMBRIA</li>
                        <li>+00 44 123 4567</li>
                    </ul>
                    <ul className="open-times">
                        <li>OPEN TIMES</li>
                        <li>MON - FRI: 09:00 AM - 10:00 PM</li>
                        <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;