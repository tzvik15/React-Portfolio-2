import React, {useState} from "react";
import "./septachords.css";
import {Link} from "react-router-dom";

import MM from "../../assets/images/MM7.jpg";
import MM56 from "../../assets/images/MM56.jpg";
import MM34 from "../../assets/images/MM34.jpg";
import MM2 from "../../assets/images/MM2.jpg";
import MMin from "../../assets/images/MMin7.jpg";
import MMin56 from "../../assets/images/MMin56.jpg";
import MMin34 from "../../assets/images/MMin34.jpg";
import MMin2 from "../../assets/images/MMin2.jpg";
import MinMin from "../../assets/images/MinMin7.jpg";
import MinMin56 from "../../assets/images/MinMin56.jpg";
import MinMin34 from "../../assets/images/MinMin34.jpg";
import MinMin2 from "../../assets/images/MinMin2.jpg";
import HDim from "../../assets/images/HDim7.jpg";
import HDim56 from "../../assets/images/HDim56.jpg";
import HDim34 from "../../assets/images/HDim34.jpg";
import HDim2 from "../../assets/images/HDim2.jpg";
import DimDim from "../../assets/images/DimDim7.jpg";
import DimDim56 from "../../assets/images/DimDim56.jpg";
import DimDim34 from "../../assets/images/DimDim34.jpg";
import DimDim2 from "../../assets/images/DimDim2.jpg";


const Septachords =()=>{

    const [start, setStart] = useState(false);

    const go=()=>{
        random()
        setStart(true)
    }


    const imageArr =[
        {
            name:"Major Major Septachord, root position",
            pic:MM,
            class:"majorMajor"
        },
        {
            name:"Major Major Septachord, 1st inversion (6/5)",
            pic:MM56,
            class:"majorMajor"
        },  
        {
            name:"Major Major Septachord, 2nd inversion (4/3)",
            pic:MM34,
            class:"majorMajor"
        },
        {
            name:"Major Major Septachord, 3rd inversion (2)",
            pic:MM2,
            class:"majorMajor"
        },
        
        {
            name:"Major Minor Septachord, root position",
            pic:MMin,
            class:"majorMinor"
        },
        {
            name:"Major Minor Septachord, 1st inversion (6/5)",
            pic:MMin56,
            class:"majorMinor"
        },  
        {
            name:"Major Minor Septachord, 2nd inversion (4/3)",
            pic:MMin34,
            class:"majorMinor"
        },
        {
            name:"Major Minor Septachord, 3rd inversion (2)",
            pic:MMin2,
            class:"majorMinor"
        },

        {
            name:"Minor Minor Septachord, root position",
            pic:MinMin,
            class:"minorMinor"
        },
        {
            name:"Minor Minor Septachord, 1st inversion (6/5)",
            pic:MinMin56,
            class:"minorMinor"
        },  
        {
            name:"Minor Minor Septachord, 2nd inversion (4/2)",
            pic:MinMin34,
            class:"minorMinor"
        },
        {
            name:"Minor Minor Septachord, 3rd inversion (2)",
            pic:MinMin2,
            class:"minorMinor"
        },

        {
            name:"Half-Diminished Septachord, root position",
            pic:HDim,
            class:"halfDiminished"
        },
        {
            name:"Half-Diminished Septachord, 1st inversion (6/5)",
            pic:HDim56,
            class:"halfDiminished"
        },  
        {
            name:"Half-Diminished Septachord, 2nd inversion (4/3)",
            pic:HDim34,
            class:"halfDiminished"
        },
        {
            name:"Half-Diminished Septachord, 3rd inversion (2)",
            pic:HDim2,
            class:"halfDiminished"
        },

        {
            name:"Fully Diminished Septachord, root position",
            pic:DimDim,
            class:"fullyDiminished"
        },
        {
            name:"Fully Diminished Septachord, 1st inversion (6/5)",
            pic:DimDim56,
            class:"fullyDiminished"
        },  
        {
            name:"Fully Diminished Septachord, 2nd inversion (4/3)",
            pic:DimDim34,
            class:"fullyDiminished"
        },
        {
            name:"Fully Diminished Septachord, 3rd inversion (2)",
            pic:DimDim2,
            class:"fullyDiminished"
        },
    ]

    const random=()=> {
        let rand1 = imageArr[Math.floor(Math.random() * imageArr.length)];
        setItem({ name:rand1.name, pic:rand1.pic });
    }

    const [item, setItem]=useState({
        name:"",
        pic:null
    })

    const selected=(event)=>{
        console.log(event.target);
        if (event.target.innerText === item.name) {
            coAn();
             random();
            console.log("yes")
        } else {
            console.log("no");
            inCoAn()
        }
    }

    const [count, setCount] = useState({
        yes: 0,
        no: 0,
      });
    
      const coAn = () => {
        setCount({ ...count, yes: count.yes + 1 });
      };
    
      const inCoAn = () => {
        setCount({ ...count, no: count.no + 1 });
      };

    return (
        start===false?
        <>
        <h2 className = "title">Septachord Recognition</h2>
        <p className ="info" >In this section, you will be presented with a picture of a chord, and your job is to recognize what chord (and inversion) it is.</p>
        <h4 className ="infoOther">Ready?</h4>
        <button className ="btn-hover colorReady" onClick={go}>READY</button>
        <Link to="/"><button className ="btn-hover colorHome  "> HOME!</button></Link>
        </>
        :
        <>
        <h4 className ="info">What chord is this?</h4>
        <div>
        <img src={item.pic} alt={"a chord"}></img>
        </div>
        <br/>
        <br/>
        <div>
        {
                imageArr.map(item => (
                    <button onClick={selected} className={item.class}>{item.name}</button>
                ))
            }
            </div>
            <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
      <Link to="/"><button className ="btn-hover colorHome  "> HOME!</button></Link>
        </>
    )
}

export default Septachords;