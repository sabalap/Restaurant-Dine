import HighlightedMenuItem from "./HighlightedMenuItem";

const HighlightedMenuList = ({menulist}) => {
    return (
        <ul>
            {menulist.map(item => (
                <HighlightedMenuItem item={item} key={item.name}/>
            ))}
        </ul>
    )
}
export default HighlightedMenuList;