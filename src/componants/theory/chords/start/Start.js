import React from "react";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
import "../start/start.css"

function Start() {

   

    return (
        <>
        <div className ="start">
        <h2 className = "hAndW">Hello and Welcome!</h2>
        <p className ="p">This application will help you learn and practice chords in music theory! To begin, please choose if you would like to learn about chords, or test your knowledge.</p>
        <Link to="/learn"><Button type="button"  className="btn-hover colorLearn" >Learn</Button></Link>

        <Link to="/play"><Button  type="button" className="btn-hover colorPlay">Play</Button></Link>

        </div>
      


        </>
    )

}

export default Start;