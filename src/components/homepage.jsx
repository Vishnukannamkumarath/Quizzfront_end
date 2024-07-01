import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
document.body.style.backgroundColor="black";
function HomeP(){
    const navigate=useNavigate();
    function signset(){
       
        navigate('/signup')
    }
    function science(){
        navigate('/questions')
    }
    function logout(){
        localStorage.clear();
    }
    return (
        <div style={{padding:"20px"}}>
           <div style={{display:"flex"}}> <img src="homelogo.jpg" width="800px" height="400px"/>
            <button style={{padding:"10px",borderRadius:"10px",marginLeft:"800px",backgroundColor:"green",height:"50px",color:"white"}} onClick={signset}>signup</button>
            </div> 
            <h1 style={{color:"red",marginTop:"20px",padding:"20px",fontSize:"50px"}}>Categorys</h1>
            <h2 style={{color:"black"}}>-----------------------------------</h2>
            <img src="logo.jpg" width="100px" height="100px" />
            <h2 style={{color:"white"}}>Expolre Science quiz questions</h2>
            <button style={{padding:"10px",marginLeft:"20px",backgroundColor:"green",color:"white"}} onClick={science}>Explore</button>
            <div style={{marginTop:"10px"}}> <img src="m1logo.png" width="100px" height="100px"/>
            <h1 style={{color:"white",fontSize:"23px"}}>Explore Math quiz questions</h1>
            <button style={{padding:"10px",marginLeft:"20px",backgroundColor:"green",color:"white"}}>Explore</button>
            
            
            </div>

        </div>
    );
}export default HomeP;