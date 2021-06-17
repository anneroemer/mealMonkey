/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const EmotionComponent = ({ large }) => {

    const style = css`
        background-color: violet;
        color: white;
        padding: ${ large ? "2em 0" : "0"};

        & h1 {
            color: green;
        }
    `;


    return ( 
        <div css={style}>
            <h1>Hej fra emotion</h1>
            <p>Det her er også styling</p>
        </div>
     );
}
 
export default EmotionComponent;

