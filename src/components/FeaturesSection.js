import placeImg from "../images/homepage/enjoyable-place-desktop.jpg";
import foodImg from "../images/homepage/locally-sourced-desktop.jpg";
import classes from "./FeaturesSection.module.css";
const FeaturesSection = () => {
    return (
        <section className={classes.features}>
            <div className="container">
                <div className={classes.place}>
                    <div className={classes.img}>
                        <img src={placeImg} alt="" />
                    </div>
                    <div className={classes["place-text"]}>
                        <h2>Enjoyable place for all the family</h2>
                        <p>Our relaxed surroundings make dining with us a great experience for everyone.
                             We can even arrange a tour of the farm before your meal.</p>
                    </div>
                </div>
                <div className={classes.food}>
                    <div className={classes.img}>
                        <img src={foodImg} alt="" />
                    </div>
                    <div className={classes["food-text"]}>
                        <h2>
                        The most locally sourced food
                        </h2>
                        <p>
                        All our ingredients come directly from our farm or local fishery.
                         So you can be sure that you’re eating the freshest, most sustainable food.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturesSection;