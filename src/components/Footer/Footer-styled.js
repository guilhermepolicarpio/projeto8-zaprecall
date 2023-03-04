import styled from 'styled-components';

export const FooterWrapper = styled.section`
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
display: flex;
justify-content: center;
align-items: center;
position: fixed;
right:0px;
bottom: 0px;
z-index: 1;
width:100%;
height:50px;

h2{
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px; 
color: #333333;
display: flex;
justify-content: center;
align-items: center;
}

img{
  width: 20px;
  height: 16px;
  margin-left: 7px;
}
`;

export const MessageWrapper = styled.section`
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
position: fixed;
right:0px;
bottom: 0px;
z-index: 1;
width:100%;
height:180px;
display:flex;
flex-direction: column;
align-items: center;

img{
width: 20px;
height: 23px;
}

h3{
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #333333;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
img{
margin-right: 15px;
}
}

h2{

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #333333;
}
`;

export const IconWrapper = styled.section`
display:flex;
justify-content: center;
align-items: center;
padding-bottom: 10px;
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
margin-bottom: 0.5em;

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