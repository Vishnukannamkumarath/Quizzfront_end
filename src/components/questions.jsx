import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
function Quiz(){
    const [scr,setscr]=useState(0);
    function score(){
        setscr(scr+1)
    }
    function wrong(){
        setscr(scr-1)
    }
    return(
        <div>
            <h1 style={{color:"red"}}>SCORE={scr}</h1>
            <h1 style={{color:"red"}}>Question:-1</h1>
            <p style={{color:"white"}}>Which gas is needed for photosynthesis?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}} onClick={wrong}>Oxigen</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}} onClick={score}>Carbon dioxide</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}  onClick={wrong}>Hydrogen</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}} onClick={wrong}>Carbon Monoxide</button>
           </div>
           <h1 style={{color:"red"}}>Question:-2</h1>
            <p style={{color:"white"}}>  
            What type of energy is required for photosynthesis to happen?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}  onClick={score}>Light</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}} onClick={wrong}>Heat</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}} onClick={wrong}>Electrical</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>Mechanical</button>
           </div>
           <h1 style={{color:"red"}}>Question:-3</h1>
            <p style={{color:"white"}}> 
            What is the waste by product of photosynthesis?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}  onClick={score}>Oxigen</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>Carbon dioxide</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Glucose</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>None of the above</button>
           </div>
           <h1 style={{color:"red"}}>Question:-4</h1>
            <p style={{color:"white"}}> What is the flow of electric charges called?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Electric Conductance</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}  onClick={score}>Electric current</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Electric Potential</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>None of the above</button>
           </div>
           <h1 style={{color:"red"}}>Question:-5</h1>
            <p style={{color:"white"}}> What is the S.I. unit of electric current?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Ohm</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}  onClick={score}>Ampere</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Faraday</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>Volt</button>
           </div>
           <h1 style={{color:"red"}}>Question:-6</h1>
            <p style={{color:"white"}}>What is the hindrance to the flow of electrical current known as?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}  onClick={score}>Resistence</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>Potential difference</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Inductance</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}} onClick={wrong}>Conductance</button>
           </div>
           <h1 style={{color:"red"}}>Question:-7</h1>
            <p style={{color:"white"}}>What is the resistance of a conductor directly proportional to</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Cross Section</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}  onClick={score}>Length</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Density</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>Melting Point</button>
           </div>
           <h1 style={{color:"red"}}>Question:-8</h1>
            <p style={{color:"white"}}>What is the SI unit of time?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Hour</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>Minute</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}  onClick={score}>Second</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>None of the above</button>
           </div>
           <h1 style={{color:"red"}}>Question:-9</h1>
            <p style={{color:"white"}}>What is the SI unit of distance?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Kilometer</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}  onClick={score}>Meter</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>Centimeter</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>Light Year</button>
           </div>
           <h1 style={{color:"red"}}>Question:-10</h1>
            <p style={{color:"white"}}>10km how many meter?</p>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}onClick={wrong}>100</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>1000</button>
           </div>
           <div style={{marginLeft:"10px"}}> <button style={{color:"white",backgroundColor:"green",padding:"10px",marginRight:"10px"}}  onClick={score}>10000</button>
           <button style={{color:"white",backgroundColor:"green",padding:"10px"}}onClick={wrong}>100000</button>
           </div>
           
        </div>
    );
}export default Quiz;