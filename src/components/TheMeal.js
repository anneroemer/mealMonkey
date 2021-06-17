import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
//import Spinner from "./Spinner";
import Beatloader from "react-spinners/BeatLoader";
//import { css } from "@emotion/react";



const TheMeal = () => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState();


    // useEffect(() => {
    //     axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    //         .then(response => {
    //             setCategories(response.data.categories)
    //             setLoading(false)
    //         })    
    // }, []);

    //hvis vi vil slippe for .then kan den også skrives sådan her
    useEffect(() => {
        (async function fetchAxios(){ //den kan også være anonym, men det er meget godt ift fejlmeddelelser at den har et navn
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
                setCategories(response.data.categories)
                setLoading(false) 
            })();
    }, []);
    
    // const override = css`
    // display: block;
    // margin: 0 auto;
    // border-color: gray;
    // `;

    //loading kan evt byttes ud med en loading "spinner" eller tomt "". Eller return categories &&
    return loading ? <Beatloader /> : ( 
        <>
        <h3>The real meal</h3> 
        {categories.map(category => (
            <Link key={category.idCategory} to={`/${category.strCategory}`}>
                <p>{category.strCategory}</p>
            </Link>
        ))}
        </>
    );
}
 
export default TheMeal;