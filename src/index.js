import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import FlashcardScreen from './components/FlashCardScreen/FlashcardScreen';
import InitialScreen from './components/InitialScreen/InitialScreen';

const rootHtml = document.querySelector(".root")

export default function App() {

    const [tela, setTela] = useState('initial');
    console.log(tela)
    return (
        <>
            {tela === 'initial' ? (<InitialScreen setTela={setTela} />) 
            : (<FlashcardScreen setTela={setTela}/>)}
        </>
    )
}

ReactDOM.render(<App />, rootHtml);