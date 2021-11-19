import classes from "./EventNames.module.css";
const EventNames = ({name,familyGathering,specialEvents,socialEvents}) => {
    const activeClass = classes.active
    const nameClass = classes.name
    return (
        <ul>
            <li onClick={familyGathering} className={`${name === "Family Gathering" ? activeClass : nameClass}`}>FAMILY GATHERING</li>
            <li onClick={specialEvents} className={`${name === "Special Events" ? activeClass : nameClass}`}>SPECIAL EVENTS</li>
            <li onClick={socialEvents} className={`${name === "Social Events" ? activeClass : nameClass}`}>SOCIAL EVENTS</li>
        </ul>
    )
}
export default EventNames;