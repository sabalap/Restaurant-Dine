import React, {useState,useEffect} from "react"
import classes from "./ProductsList.module.css";
import SingleProduct from "../components/SingleProduct";
import axios from "axios";
const ProductsList = () => {
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const fetchCategories = async () => {
        setLoading(true);
        const response = await axios.get("https://my-restaurant-api-project.herokuapp.com/products")
        .catch((err) => {
            setError(err)
        })
        const data = response.data;
        setProducts(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchCategories();
    },[]) 
    return (
        <section className={classes.menuList}>
            <div className={`container ${classes.container}`}>
                {error && {error}}
                <h1>Menu List</h1>
                {loading ? <p className={classes.loading}>Loading...</p> : (
                     <div className={classes["menu-container"]}>
                       {products.map(product => (
                           <SingleProduct key={product.id} product={product}/>
                       ))}
                    </div>
                )}
            </div>
        </section>
    )
}
export default ProductsList;