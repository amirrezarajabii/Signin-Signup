import styled from 'styled-components';

//backgroung
import background from './../assets/bg.jpeg';

export const colors = {
    primary:"#fff",
    them:"#BE185D",
    light1:"#F3F4F6",
    light2:"#E5E7EB",
    dark1:"#1F2937",
    dark2:"#4B5563",
    dark3:"#9CA3AF",
    red:"#DC2626"
}

//Styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: url(${background});
    background-size:cover;
    background-attachment:fixed;
`;