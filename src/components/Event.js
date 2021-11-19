import { Link } from "react-router-dom";
import classes from "./Event.module.css";
import EventNames from "./EventNames";
const Event =  ({event,name,familyGathering,specialEvents,socialEvents}) => {
    return (
        <section className={classes.event}>
            <div className="container">
                <div className={classes["event-item"]}>
                    <div className={classes.img}>
                        <img src={event.img} alt="" />
                    </div>
                    <div className={classes["event-info"]}>
                        <h2>{event.name}</h2>
                        <p>{event.desc}</p>
                        <Link to="/booking" className={classes.button}>book a table</Link>
                        <EventNames 
                        name={name}
                        familyGathering={familyGathering}
                        specialEvents={specialEvents}
                        socialEvents={socialEvents}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Event;