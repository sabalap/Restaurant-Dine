import salmonImg from "../images/homepage/salmon-mobile.jpg";
import beefImg from "../images/homepage/beef-mobile.jpg";
import chocolateImg from "../images/homepage/chocolate-mobile.jpg";
import HighlightedMenuList from "./HighlightedMenuList";
import classes from "./HighlightsMenu.module.css";
import { Link } from "react-router-dom";
const highlightedMenu = [
    {
        name:"Seared Salmon Fillet",
        description:"Our locally sourced salmon served with a refreshing buckwheat summer salad.",
        img:salmonImg
    },
    {
        name:"Rosemary Filet Mignon",
        description:"Our prime beef served to your taste with a delicious choice of seasonal sides.",
        img:beefImg
    },
    {
        name:"Summer Fruit Chocolate Mousse",
        description:"Creamy mousse combined with summer fruits and dark chocolate shavings.",
        img:chocolateImg
    }
]
const HighlightsMenu = () => {
    return(
        <section className={classes.highlights}>
            <div className="container">
                <div className={classes["highlights-container"]}>
                    <div className={classes["highlights-text"]}>
                        <h2>A few highlights from our menu</h2>
                        <p>
                        We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                        Our menu is revamped every season.
                        </p>
                        <Link to="/menu" className={classes.button}>Menu List</Link>
                    </div>
                    <HighlightedMenuList menulist={highlightedMenu}/>
                </div>
            </div>
        </section>
    )
}
export default HighlightsMenu;