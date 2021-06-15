//import React from "react";
import Shoppingcart from "./Icon";

const Greeting = ({ name }) => {
    return ( 
        <>
            <div className="greeting">
                <h2 className="greeting__h2">Good morning { name }!</h2>
                <Shoppingcart />
            </div>
        </>
     );
}
 
export default Greeting;