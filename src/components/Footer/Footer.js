import React from 'react';

import Happy from '../../assets/images/party.png';
import Sad from '../../assets/images/sad.png';
import { Button, FooterWrapper, IconWrapper, MessageWrapper } from './Footer-styled';

export default function Footer({ result, optionIcon, questions, setTela }) {

    const [status, setStatus] = React.useState('');
    console.log(setTela)
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
                    <h2>{result.length}/8 COMPLETED</h2>
                    {result.map((answer, index) =>
                        <img 
                            key={index}
                            src={optionIcon(answer)}
                            alt='' />)}

                </FooterWrapper>
            )

        case 'in':
            return (
                <FooterWrapper>
                    <MessageWrapper>
                        <h3><img src={Happy} alt='' /> Congratulations!</h3>
                        <h2>You didn't forget any flashcards.</h2>
                        <h2>{result.length}/8 COMPLETED</h2>
                        <IconWrapper>
                            {result.map((answer, index) =>
                                <img key={index} src={optionIcon(answer)} alt='' />)}
                        </IconWrapper>
                        <Button onClick={() => setTela('initial')}>
                            <h2>RESTART</h2>
                        </Button>
                    </MessageWrapper>

                </FooterWrapper>
            );
        case 'out':
            return (
                <MessageWrapper>
                    <h3> <img src={Sad} alt='' />Putz...</h3>
                    <h2>There are still some missing... But don't give up!</h2>
                    <h2>{result.length}/8 COMPLETED</h2>
                    <IconWrapper>
                        {result.map((answer, index) =>
                            <img key={index} src={optionIcon(answer)} alt='' />)}
                    </IconWrapper>
                    <Button onClick={() => setTela('initial')}>
                        <h2>RESTART</h2>
                    </Button>
                </MessageWrapper>
            );
        default:
            break;
    }
}
