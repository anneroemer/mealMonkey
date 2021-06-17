import { useEffect } from "react";
import axios from "axios";

const Meals = ({ category }) => {

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => console.log(response))
    }, [category]);

    return ( <h1>{ category }</h1> );
}
 
export default Meals;