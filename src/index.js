import ReactDOM from "react-dom";
import React from "react";
import InitialScreen from "./components/initial-screen";
import FlashcardScreen from "./components/flashcard-screen";

const rootHtml= document.querySelector(".root")

export default function App(){

    const [tela, setTela] = React.useState('initial');

    return(
        <>
         {tela ==='initial' ? (<InitialScreen setTela={setTela}/> ) : ( <FlashcardScreen /> )}
        </>
    )
}

ReactDOM.render(<App />, rootHtml);