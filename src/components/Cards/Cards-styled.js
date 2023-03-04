import styled from 'styled-components';

export const Box = styled.div`
margin-bottom: 20px;
position: relative;

`;

export const CloseCard = styled.div`
display: flex;
width: 340px;
height: 55px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
align-items: center;
justify-content: space-between;
padding: 0 22px 0 15px;
transition:  transform 2.8s ease;
p {
width: 87px;
height: 19px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
}

`;

export const CloseCardImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
width: 20px;
height: 23px;
}

:hover {
cursor: pointer;
transform: scale(1.1); 
transition: transform 0.3s ease; 
}
`;

export const TextQuestionWrapper = styled.div`
width: 300px;
height: 70px;
box-sizing: border-box;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
margin: 15px 0px 0px 15px;
`;

export const OpenedQuestionWrapper = styled.div`
display: flex;
width: 377px;
min-height: 150px;
background: #FFFFD4;
transition: transform 0.3s ease;
border-radius: 5px;

img{
width: 30px;
height: 20px;
position: absolute;
bottom: 10px;
right: 20px;
:hover {
cursor: pointer;
transform: scale(1.1); 
transition: transform 0.3s ease; 
}
}
`;

export const Buttons = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: absolute;
top: 110px;
left: 0px;
`;


export const Button = styled.div`
width: 85px;
height:30px;
margin: 0px 5px;
border: solid 1px #FFFFFF;
border-radius: 5px;
font-family: 'Recursive', sans-serif;
font-size: 12px;
color: #FFFFFF;
text-align: center;

:nth-of-type(1) {
background-color: #FF3030;
}
:nth-of-type(2) {
background-color: #FF922E;
}
:nth-of-type(3) {
background-color: #2FBE34;
}

p{
display: flex;
justify-content: center;
align-items: center;
}

:hover {
cursor: pointer;
transform: scale(1.1); 
transition: transform 0.3s ease; 
}
`;

export const FinalCardWrapper = styled.div`
display: flex;
width: 337px;
height: 55px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
align-items: center;
justify-content: space-between;
padding: 0 22px 0 15px;

img{
width: 20px;
height: 23px;
position: absolute;
bottom: 20px;
right: 21px;
}

p {
width: 87px;
height: 19px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
}

p.Error {
text-decoration: line-through;
color: #FF3030;
}

p.Doubt {
text-decoration: line-through;
color: #FF922E;
}
p.Correct {
text-decoration: line-through;
color: #2FBE34;
}
`;