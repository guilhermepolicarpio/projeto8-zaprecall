import React from 'react'
import Top from './top'
export default function FlashcardScreen(){

    const questions = [
        {question: " O que é JSX? ", awnser:"Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", awnser:"Uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", awnser:"letra maiúscula"},
        {question: " Podemos colocar __ dentro do JSX", awnser:"expressões"},
        {question: "O ReactDOM nos ajuda __", awnser:"interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para __", awnser:"gerenciar os pacotes necessários e suas dependências"},
        {question: "Usamos props para __", awnser:"passar diferentes informações para componentes "},
        {question: "Usamos estado (state) para __", awnser:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    return(
       
    <div class="content">
        <Top/>
        
    </div>
    
        )
    }