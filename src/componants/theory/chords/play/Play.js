import React, {useState} from "react";
import {Link} from "react-router-dom";
 import "./play.css";
import SoundPlay from "../soundPlay/SoundPlay";
import TheoryPlay from "../theoryPlay/TheoryPlay";






const Play =()=> {

    const [gameChoice, setGameChoice] = useState({
        choice:false,
        sound:false
    })

    const sound=()=> {
        setGameChoice({choice:true, sound:true})
    }

    const theory=()=> {
        setGameChoice({choice:true, sound:false})
    }


    return (
        gameChoice.choice===false?
        <>
   
       <div id="playChoice">
        <h4 className ="title">Would you like to play with sounds or with theory?</h4>
        <div id="playChoiceBtn">
        <button className ="btn-hover colorSound"  onClick={sound}>Sounds</button>
        <button className ="btn-hover colorTheory"  onClick={theory}>Theory</button>
        <Link to="/theory/chords"><button className ="btn-hover colorHome" id="playChoiceHome"> HOME!</button></Link>
        </div>
        </div>
        </>
        :
        gameChoice.choice===true && gameChoice.sound===false ?
        <TheoryPlay />
        :
        <SoundPlay />
        
    )
}

export default Play;



