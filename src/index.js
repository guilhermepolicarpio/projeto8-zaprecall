import React from 'react';
import ReactDOM from 'react-dom';

import FlashcardScreen from './components/FlashcardScreen';
import InitialScreen from './components/InitialScreen';


const rootHtml = document.querySelector(".root")

export default function App() {

    const [tela, setTela] = React.useState('initial');

    return (
        <>
            {tela === 'initial' ? (<InitialScreen setTela={setTela} />) 
            : (<FlashcardScreen />)}
        </>
    )
}

ReactDOM.render(<App />, rootHtml);