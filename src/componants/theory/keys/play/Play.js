import React, {useState} from "react";
import { Link } from "react-router-dom";
import Relative from "../relative/Relative"
import Sharps from "../sharps/Sharps"
import Flats from "../flats/Flats"
import Quiz from "../quiz/Quiz"
 import "../play/play.css"

function Play() {

    const [choiceState, setChoiceState] = useState({
        choice:false,
        rk: false,
        sk: false,
        fk: false,
        qy: false
    })

    function relative() {
        setChoiceState({...choiceState, rk:true, choice:true})
    }

    function sharps() {
        setChoiceState({...choiceState, sk:true, choice:true})
    }

    function flats() {
        setChoiceState({...choiceState, fk:true, choice:true})
    }

    function quiz() {
        setChoiceState({...choiceState, qy:true, choice:true})
    }

    function reset() {
        setChoiceState({   choice:false, rk: false,
            sk: false,
            fk: false,
            qy: false})
    }


    return (
        choiceState.choice===false?
        <>
        <p className ="headTest">Welcome to the play section of this app! Here you will have the opportunity to test your abilities and the things you have learned! You can practice specific topics, or try the "quiz yourself" section that includes all kinds of questions!</p>
        <div className="choicePlayDiv">
        <button  className= "ans1But" onClick={relative}>Relative Keys</button>
        <button className= "ans1But" onClick={sharps}>Sharp Keys</button>
        <button className= "ans1But" onClick={flats}>Flat Keys</button>
        <button className= "ans1But" onClick={quiz}>Quiz Yourself!</button>
        </div>
        </>
        :
        choiceState.choice===true && choiceState.rk===true?
        <Relative />
        :
        choiceState.choice===true && choiceState.sk===true?
        <Sharps />
        :
        choiceState.choice===true && choiceState.fk===true?
        <Flats />
        :
        choiceState.choice===true && choiceState.qy===true?
        <Quiz />
        :
        <>
        <p>Click the button to return to the main menu.</p>
        <button className= "ans1But" onClick={reset}><Link to="/Theory">HOME</Link></button>
        </>
    )
}

export default Play;