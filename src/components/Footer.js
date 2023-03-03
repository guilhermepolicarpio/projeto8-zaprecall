import React from 'react';
import styled from 'styled-components';

import Happy from '../../src/assets/images/party.png';
import Sad from '../../src/assets/images/sad.png';

export default function Footer({ result, optionIcon, questions }) {

    const [status, setStatus] = React.useState('');

    if (result.length === 8 && status === '') {
        if (result.filter((item) => item === 'Correct').length === questions.length) {
            setStatus('in');
        } else {
            setStatus('out');
        }
    }

    switch (status) {
        case '':
            return (
                <FooterWrapper>
                    <h2>{result.length}/8 CONCLUÍDOS</h2>
                        {result.map((answer, index) =>
                            <img class="iconImg"
                                key={index}
                                src={optionIcon(answer)}
                                alt='' />)}
       
                </FooterWrapper>
            )

        case 'in':
            return (
                <div className='footerBox finished'>
                    <div className="message">
                        <h3><img src={Happy} alt='' /> Parabéns!</h3>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                        <h2>{result.length}/8 CONCLUÍDOS</h2>
                        <div>
                            {result.map((answer, index) => <img key={index} src={optionIcon(answer)} alt='' />)}
                        </div>

                    </div>
                </div>
            );
        case 'out':
            return (
                <div className='footerBox finished'>
                    <div className="message">
                        <h3><img src={Sad} alt='' /> Putz...</h3>
                        <p>Ainda faltam alguns... Mas não desanime!</p>
                        <h2>{result.length}/8 CONCLUÍDOS</h2>
                        <div>
                            {result.map((answer, index) => <img key={index} src={optionIcon(answer)} alt='' />)}
                        </div>

                    </div>
                </div>
            );
        default:
            break;
    }
}

const FooterWrapper = styled.section`
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
  height:40px;


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
`;