import Logo from "../../src/assets/images/logo.png"
import React from "react"


export default function InitialScreen({setTela}){

return(
   
<div className="content">
    
    <img src={Logo} alt=""/>
    <firstP>Zap Recall</firstP>
    <div className="initial-button" onClick={() => setTela('flash')}>
        <h2>Vamos começar!!!</h2>
    </div>
</div>

    )
}