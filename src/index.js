import ReactDOM from "react-dom";
import React from "react";
import InitialScreen from "./components/initial-screen";
import FlashcardScreen from "./components/flashcard-screen";

const rootHtml= document.querySelector(".root")

export default function App(){
    return(
        <InitialScreen/>
        //<FlashcardScreen/>
    )
}

ReactDOM.render(<App />, rootHtml);