import Event from "./Event";
import { useState } from "react";
import { Fragment } from "react";
import familyGatheringImg from "../images/homepage/family-gathering-desktop.jpg";
import specialEventsImg from "../images/homepage/special-events-desktop.jpg";
import socialEventsImg from "../images/homepage/social-events-desktop.jpg";
const eventsData = [
    {
        name:"Family Gathering",
        desc:"We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        img:familyGatheringImg
    },
    {
        name:"Special Events",
        desc:"Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
        img:specialEventsImg
    },
    {
        name:"Social Events",
        desc:"Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
        img:socialEventsImg
    }
]
const Events = () => {
    const [eventNumber,setEventNumber] = useState(0);
    const events = eventsData[eventNumber] 
    const {name} = events;
    
    const familyGathering = () => {
        setEventNumber(0)
    }
    const specialEvents = () => {
        setEventNumber(1)
    }
    const socialEvents = () => {
        setEventNumber(2);
    }
    return (
        <Fragment>
            <Event 
                event={events}  
                name={name}
                familyGathering={familyGathering}
                specialEvents={specialEvents}
                socialEvents={socialEvents}
            />
        </Fragment>
    )
}
export default Events;