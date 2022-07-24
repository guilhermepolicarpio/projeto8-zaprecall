import React from 'react';
import Set from "../../src/assets/images/Vector.png"
import Reveal from "../../src/assets/images/setinha.png"
import Error from "../../src/assets/images/error.png"
import Doubt from "../../src/assets/images/doubt.png"
import Correct from "../../src/assets/images/correct.png"

export default function Cards({questionNumber,answer,question}){

    const [level, setLevel] = React.useState(1);
    const [recall, setRecall] = React.useState("");


    function clickRecall(answer) {
        setLevel(4);
        setRecall(answer);
    }

    function optionIcon(recall){
        if(recall==='Error') {
            return Error;
        } else if(recall==='Doubt') {
            return Doubt;
        } else if(recall==='Correct') {
            return Correct;
        }
    }
   
    switch(level){

    case 1:
        return(
        <div className = "box">
            <ClosedQuestion questionNumber={questionNumber} setLevel={setLevel}/>
        </div>        
)

    case 2:
        return(
        <div className = "box">
            <OpenedQuestion setLevel={setLevel}  question={question}/>
        </div>
    )

    case 3:
        return(
        <div className = "box">
            <AnswerQuestion answer={answer} refresh={answer}/>
            <div className='buttons'>
                <button onClick={()=>clickRecall("Error")}>Não lembrei</button>
                <button onClick={()=>clickRecall("Doubt")}>Quase não lembrei</button>
                <button onClick={()=>clickRecall("Correct")}>Zap!</button>
            </div>
        </div>
    )

    case 4:
        return (
            <div className='box'>
                <div className = 'finalCard'>
                <p className={recall}>Pergunta {questionNumber} <img src={optionIcon(recall)} alt=''/></p>
                </div>
            </div>
        );

    default:
        break;

}}


function ClosedQuestion({questionNumber, setLevel}){
   
    return(
        <div className="closeCard" >
            <p>Pergunta {questionNumber}</p>
            <div onClick={() => setLevel(2)}>
                <img src={Set} alt="" />
                
            </div>
        </div>
        )
}

function OpenedQuestion({ setLevel,question}){
   
    return(
        <div className="openCard" >
            <div className="textQuestion">
                {question}
            </div>
            <div onClick={() => setLevel(3)}>
                    <img src={Reveal} alt="" />
            </div>
        </div>
    )
}

function AnswerQuestion({answer}){
    return (
        <div className="openCard" >
        <div className="textQuestion">
            {answer}
        </div>
        
    </div>
    )
}  
