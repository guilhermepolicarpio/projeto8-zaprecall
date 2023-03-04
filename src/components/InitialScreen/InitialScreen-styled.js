import styled from 'styled-components';

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
z-index: 1;
background-color: rgba(251, 107, 107, 1);

img{
width: 50px;
height: 50px;
margin-top: 8em;
}

h1{
font-family: 'Righteous';
font-style: normal;
font-weight: bold;
font-size: 36px;
padding: 0.5em 0em;
color: #FFFFFF;
}
`;

export const Button = styled.section`
width: 246px;
height: 115px;
background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
border: none;
transition: background-color 0.3s ease-in-out;
margin-bottom: 15%;

h2{
font-style: bold;
font-weight: 600;
font-size: 18px;
text-align: center;
color: #FF6666;
display: flex;
justify-content: center;
align-items: center;
}

:hover {
background-color: #FFE5CC; 
cursor: pointer;
}

:active {
background-color: #005cbf; 
}
`;
