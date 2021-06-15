import { useState, useEffect } from "react";

const Counter = () => {

    //const [count, setCount] = useState(0); //usf genvej til ny state variabel
    const [count, setCount] = useState(parseInt(localStorage.getItem("myCount")) || 0);

    //uef genvej
    //useEffect hook
    useEffect(() => {
        localStorage.setItem("myCount", count)
    }, [count]);

    let countUp = () => {
        if (count < 15){
        setCount(count + 1)
        //localStorage.setItem("myCount", count) //Vi flytter den ind i vores useEffect
        }
        //Logical AND (&&)
        //count < 15 && setCount(count + 1)
    };

    let countDown = () => {
        if (count > 0){
        setCount(count - 1)
        //localStorage.setItem("myCount", count) //Vi flytter den ind i vores useEffect
        }
    };

    return ( 
        <>
        <h2>{ count }</h2>
        <button onClick={countDown}>Go down</button>
        <button onClick={countUp}>Go up</button>
        </>
     );
}
 
export default Counter;