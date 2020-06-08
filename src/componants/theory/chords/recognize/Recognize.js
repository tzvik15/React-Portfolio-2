import React, { useState } from "react";
import { Link } from "react-router-dom";
 import "./recognize.css";
import Triads from "../triads/Triads";
import Septachords from "../septachords/Septachords";

const Recognize = () => {
  const [choice, setChoice] = useState({
    triads: false,
    septachords: false,
  });

  const triads = () => {
    setChoice({ triads: true, septachords: false });
  };

  const septachords = () => {
    setChoice({ triads: false, septachords: true });
  };

  return choice.triads === false && choice.septachords === false ? (
    <>
<div id="recChoiceBtn">
      <h4 className="infoS">
        Would you like to play with Triads or Septachords?
      </h4>
    <div id="recBtn">
      <button className="btn-hover colorTriads" onClick={triads}>
        Triads
      </button>
      <button className="btn-hover colorSept" onClick={septachords}>
        Septachords
      </button>

      <Link to="/theory/chords">
        <button className="btn-hover colorHome"> HOME!</button>
      </Link>
    </div>
    </div>
    </>
  ) : choice.triads === true ? (
    <>
      <Triads />
    </>
  ) : (
    <>
      <Septachords />
    </>
  );
};

export default Recognize;
