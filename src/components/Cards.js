import React from 'react';
import Set from "../../src/assets/images/Vector.png"
import Reveal from "../../src/assets/images/setinha.png"

export default function Cards({questionNumber,question,answer}){

    const [openQuestion,setOpenQuestion] = React.useState(false);
    console.log(openQuestion)
    return(
    <> {
       !openQuestion  ?
        <div className = "box">
            <ClosedQuestion questionNumber={questionNumber} setOpenQuestion={setOpenQuestion}/>
        </div>
            :
        <div className = "box">
            <OpenedQuestion questionNumber={questionNumber} openQuestion={openQuestion} setOpenQuestion={setOpenQuestion} question={question}/>
        </div>
    }
    </>
)}


function ClosedQuestion({questionNumber, setOpenQuestion}){
    console.log("oi")
    return(
        <div className="closeCard" >
            <p>Pergunta {questionNumber}</p>
            <div onClick={() => setOpenQuestion(true)}>
                <img src={Set} alt="" />
                
            </div>
        </div>
        )
}

function OpenedQuestion({questionNumber, openQuestion, setOpenQuestion,question}){
    console.log("oiiiiii")
  
    return(
        <div className="openCard" >
            <div className="textQuestion">
                {question}
            </div>
            <img src={Reveal} alt="" />
        </div>
    )
}


    
