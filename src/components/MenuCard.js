//import styled, { ThemeProvider } from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import Arrow from "../elements/Arrow";
import Card from "../elements/Card";
import FoodAvatar from "../elements/FoodAvatar";



const MenuCard = ({ imageurl, headline, text }) => {
    return ( 
        <Card>
            <FoodAvatar src={ imageurl } />
            <div>
                <h2>{ headline }</h2>
                <p>{ text }</p>
            </div>
            <Arrow ><BsChevronRight /></Arrow>
        </Card>
     );
}
 
export default MenuCard;