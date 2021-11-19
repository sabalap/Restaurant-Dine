import {Link} from "react-router-dom";
import classes from "./BookingForm.module.css";
import { useState } from "react";
const BookingForm = () => {
    const [people,setPeople] = useState(4);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [month,setMonth] = useState("")
    const [day,setDay] = useState("");
    const [year,setYear] = useState("");
    const [hour,setHour] = useState("");
    const [minute,setMinute] = useState("");
    const [warning,setWarning] = useState("Please enter all value");
    const increaseHandler = () => {
        setPeople(people + 1)
    }
    const decreaseHandler = () => {
        setPeople(people - 1)
        if(people === 1) {
            setPeople(1);
            return;
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="text" placeholder="Name" required value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <div className={classes.date}>
                <label>Pick a date</label>
                <div className={classes["select-date"]}>
                    <input type="number" name="month" min="1" max="12" placeholder="MM" required value={month} onChange={e => setMonth(e.target.value)}/>
                    <input type="number" name="day" min="1" max="31" placeholder="DD" required value={day} onChange={e => setDay(e.target.value)} />
                    <input type="number" name="year" min="2021" max="2030" placeholder="YYYY"  required value={year} onChange={e => setYear(e.target.value)}/>
                </div>
            </div>
            <div className={classes.time}>
                <label>Pick a time</label>
                <div className={classes["select-time"]}>
                    <input type="number" min="0" max="12" placeholder="HH" required value={hour} onChange={e => setHour(e.target.value)} />
                    <input type="number" min="0" max="59" placeholder="MM" required value={minute} onChange={e => setMinute(e.target.value)} />
                    <select name="time" id="time">
                        <option value="am" required>AM</option>
                        <option value="pm" required>PM</option>
                    </select>
                </div>
            </div>
            <div className={classes.people}>
                <span onClick={decreaseHandler}>-</span>
                <span className={classes["people-number"]}>{people} people</span>
                <span onClick={increaseHandler}>+</span>
            </div>
            <div className={classes.red}>
            {!name || !email || !month || !day || !year || !hour || !minute ? warning : ""}
            </div>
            <Link type="button" className={`${classes.button} ${name && email && month && day && year && hour && minute ?  "" : classes.disable} `} to="/booking/reservation">make reservation</Link>
        </form>
    )
}
export default BookingForm;