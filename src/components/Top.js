import styled from 'styled-components';

import Logo from '../../src/assets/images/logo-pequeno.png';

export default function Top() {
    return (
        <TopWrapper>
            <img src={Logo} alt="" />
            <h1>ZapRecall</h1>
        </TopWrapper>
    )
}

const TopWrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin: 2.2em;
padding: 0.5em;

img{
width: 52px;
height: 50px;
margin-right:10px;
}

h1{
font-family: 'Righteous';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  padding: 0.5em 0em;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items:center;
}
`;