import React from "react"
import Sad from "../../src/assets/images/sad.png"
import Happy from "../../src/assets/images/party.png"


export default function Footer({result,optionIcon,questions}){

    const [status, setStatus] = React.useState('');

    if(result.length === 8 && status === '') {
        if(result.filter((item)=>item==='Correct').length === questions.length) {
            setStatus('in');
        } else {
            setStatus('out');
        }
    }
    
switch(status){
    case '':
  
        return(

            <div className="footerBox">
                <div>

                    <h2>{result.length}/8 CONCLUÍDOS</h2>
                    <div>
                            {result.map((answer, index) => <img class="iconImg" key={index} src={optionIcon(answer)} alt='' />)}
                        </div>
                 </div>
            </div>
        )

    case 'in':
        return (
            <div className='footerBox finished'>
                <div className="message">
                    <h3><img src={Happy} alt=''/> Parabéns!</h3>
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
                    <h3><img src={Sad} alt=''/> Putz...</h3>
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