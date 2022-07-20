import Logo from "../../src/assets/images/logo.png"
import React from "react"

export default function InitialScreen(){
return(
   
<div className="content">
    <img src={Logo} alt=""/>
    <h1>Zap Recall</h1>
    <div className="initial-button">
        <h2>Vamos começar!!!</h2>
    </div>
</div>

    )
}