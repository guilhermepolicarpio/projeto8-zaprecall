import React from 'react';

import Reveal from '../../assets/images/setinha.png';
import Set from '../../assets/images/Vector.png';
import {
    Box,
    Button,
    Buttons,
    CloseCard,
    CloseCardImg,
    FinalCardWrapper,
    OpenedQuestionWrapper,
    TextQuestionWrapper,
} from './Cards-styled';

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
                            <p> Don't remember</p>
                        </Button>
                        <Button onClick={() => clickRecall("Doubt")}>
                            <p> Almost remember</p>
                        </Button>
                        <Button onClick={() => clickRecall("Correct")}>
                            <p>Zap!</p>
                        </Button>
                    </Buttons>
                </Box>
            )

        case 4:
            return (
                <Box>
                    <FinalCardWrapper >
                        <p className={recall}>Question {questionNumber}
                            <img src={optionIcon(recall)} alt='' /></p>
                    </FinalCardWrapper>
                </Box>
            );
        default:
            break;

    }
}


function ClosedQuestion({ questionNumber, setLevel }) {

    return (
        <CloseCard >
            <p>Question {questionNumber}</p>
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
