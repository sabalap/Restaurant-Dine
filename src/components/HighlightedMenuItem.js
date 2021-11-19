import classes from "./HighlightedMenuItem.module.css";
const HighlightedMenuItem = ({item}) => {
    return (
        <li className={classes.item}>
            <div className={classes.img}>
                <img src={item.img} alt="" />
            </div>
            <div className={classes.info}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        </li>
    )
}
export default HighlightedMenuItem;