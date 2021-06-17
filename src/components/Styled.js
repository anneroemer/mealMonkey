//import styled, { ThemeProvider } from "styled-components"; //vi behøver ikke styled her, fordi vi har flyttet stylingen til sin egen fil i elementss
import styled, { ThemeProvider } from "styled-components";
import LargeHeading from "../elements/LargeHeadings";
import EmotionComponent from "./EmotionComponent";
import ImageCover from "./ImageCover";
import MenuCard from "./MenuCard";
import ProportionalBox from "./ProportionalBox";

const theme = {
    primary: "gray",
    secondary: "goldenrod",
    alert: "orange",
    success: "green"
}

const MenuBackground = styled.div`
    background-color: #FC6011;
    width: 100px;
    height: inherit;
    border-radius: 0 1.8rem 1.8rem 0;
    padding: 0.4rem 0;
`;

const MenuHolder = styled.section`
    height: 100%;
    padding: 1rem 0;
    margin: 0 auto;
`;



//Vi har flyttet denne til sin egen fil i elements mappen
// const LargeHeading = styled.h1`
//     font-size: 3em;
//     font-family: Arial, Helvetica, sans-serif;
//     color: ${props => props.theme[props.color]};
// `; //tagged template literal

//theme= kommer fra Themeprovider og theme er vores const
const Styled = () => {
    return ( 
        <ThemeProvider theme={theme}> 
        <section>
            <h1>Styled components</h1>
            <LargeHeading color="alert">Sturh overskrift</LargeHeading>
            <input type="text" name="bla" id="bla" />
            <button>Create</button>
        </section>
        <EmotionComponent />
        <MenuHolder>
            <MenuBackground>
                <MenuCard imageurl="https://source.unsplash.com/featured/?food" headline="Food"/>
                <MenuCard imageurl="https://source.unsplash.com/featured/?coffee" headline="Coffee"/>
                <MenuCard imageurl="https://source.unsplash.com/featured/?baked_goods" headline="Baked goods"/>
            </MenuBackground>
        </MenuHolder>
        <section style={{position: "absolute"}}>
        <ProportionalBox overlay>
            <ImageCover src="https://media.tenor.com/images/affb29e2a91a45c9c5dbbe0bc4d25514/tenor.png" alt="dog" />
        </ProportionalBox>
        </section>
        </ThemeProvider>
     );
}
 
export default Styled;