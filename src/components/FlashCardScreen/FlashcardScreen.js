import React from 'react';

import Correct from '../../assets/images/correct.png';
import Doubt from '../../assets/images/doubt.png';
import Error from '../../assets/images/error.png';
import Cards from '../Cards/Cards.js';
import Footer from '../Footer/Footer';
import Top from '../Header/Header';
import { ContentWrapper } from './FlashcardScreen-styled';

const questions = [
    { question: " O que é JSX? ", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: " Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes " },
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

function alternate() {
    return Math.random() - 0.5;
}

questions.sort(alternate);

export default function FlashcardScreen({setTela}) {

    const [result, setResult] = React.useState([]);

    function updateResult(answer) {
        setResult([...result, answer]);
    }

    function optionIcon(recall) {
        if (recall === 'Error') {
            return Error;
        } else if (recall === 'Doubt') {
            return Doubt;
        } else if (recall === 'Correct') {
            return Correct;
        }
    }
    return (
        <ContentWrapper>
            <Top />
            {
                questions.map((flashCard, index) => {
                    return <Cards
                        key={index}
                        questionNumber={index + 1}
                        question={flashCard.question}
                        answer={flashCard.answer}
                        updateResult={updateResult}
                        optionIcon={optionIcon} />
                })}

            <Footer
                result={result}
                optionIcon={optionIcon}
                questions={questions} 
                setTela={setTela}/>

        </ContentWrapper>
    )
}
