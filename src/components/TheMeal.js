import { useState, useEffect } from "react";
import axios from "axios";

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

    useEffect(() => {
        (async function fetchAxios(){ //den kan også være anonym, men det er meget godt ift fejlmeddelelser at den har et navn
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
                setCategories(response.data.categories)
                setLoading(false) 
            })();
    }, []);

    return loading ? <h1>loading</h1> : ( //loading kan evt byttes ud med en loading "spinner" eller tomt "". Eller return categories &&
    <>
        <h3>The real meal</h3> 
        {categories.map(category => (
            <p key={category.idCategory}>{category.strCategory}</p>
        ))}
    </>
    );
}
 
export default TheMeal;