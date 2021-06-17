import styled from "styled-components";

export default styled.div`
    display: block;
    width: 100%;
    padding-top: ${props => props.height ? props.height : "52%"};
    background-color: orange;

    ${props => props.overlay && `
    
    &::after {
        content: "";
        width: 100%;
        height: 54%;
        position: absolute;
        left: 0;
        bottom: 0;
        background: rgb(0,0,0);
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);

    }

    `}
`;