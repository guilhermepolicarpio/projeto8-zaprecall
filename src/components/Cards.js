import React from 'react';
import styled from 'styled-components';

import Reveal from '../../src/assets/images/setinha.png';
import Set from '../../src/assets/images/Vector.png';

export default function Cards({ questionNumber, answer, question, updateResult, optionIcon }) {

    const [level, setLevel] = React.useState(1);
    const [recall, setRecall] = React.useState("");


    function clickRecall(answer) {
        setLevel(4);
        setRecall(answer);
        updateResult(answer);
    }

    switch (level) {

        case 1:
            return (
                <Box>
                    <ClosedQuestion questionNumber={questionNumber} setLevel={setLevel} />
                </Box>
            )

        case 2:
            return (
                <Box>
                    <OpenedQuestion setLevel={setLevel} question={question} />
                </Box>
            )

        case 3:
            return (
                <Box>
                    <AnswerQuestion answer={answer} refresh={answer} />
                    <Buttons>
                        <Button onClick={() => clickRecall("Error")}>
                            <p> Não lembrei</p>
                        </Button>
                        <Button onClick={() => clickRecall("Doubt")}>
                            <p> Quase não lembrei</p>
                        </Button>
                        <Button onClick={() => clickRecall("Correct")}>
                            <p>Zap!</p>
                        </Button>
                    </Buttons>
                </Box>
            )

        case 4:
            return (
                <div className='box'>
                    <div className='finalCard'>
                        <p className={recall}>Pergunta {questionNumber}
                            <img src={optionIcon(recall)} alt='' /></p>
                    </div>
                </div>
            );

        default:
            break;

    }
}


function ClosedQuestion({ questionNumber, setLevel }) {

    return (
        <CloseCard >
            <p>Pergunta {questionNumber}</p>
            <CloseCardImg onClick={() => setLevel(2)}>
                <img src={Set} alt="" />
            </CloseCardImg>
        </CloseCard>
    )
}

function OpenedQuestion({ setLevel, question }) {

    return (
        <OpenedQuestionWrapper>
            <TextQuestionWrapper>
                {question}
            </TextQuestionWrapper>
            <div onClick={() => setLevel(3)}>
                <img src={Reveal} alt="" />
            </div>
        </OpenedQuestionWrapper>
    )
}

function AnswerQuestion({ answer }) {
    return (
        <OpenedQuestionWrapper >
            <TextQuestionWrapper>
                {answer}
            </TextQuestionWrapper>
        </OpenedQuestionWrapper>
    )
}

const Box = styled.div`
margin-bottom: 20px;
position: relative;

`;

const CloseCard = styled.div`
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

const CloseCardImg = styled.div`
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

const TextQuestionWrapper = styled.div`
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

const OpenedQuestionWrapper = styled.div`
display: flex;
width: 377px;
min-height: 150px;
background: #FFFFD4;
transition: transform 0.3s ease;

img{
width: 30px;
height: 20px;
position: absolute;
bottom: 10px;
right: 20px;
}
`;

const Buttons = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: absolute;
top: 110px;
left: 0px;
`;


const Button = styled.div`
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