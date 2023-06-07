import React from 'react'
import signup from "../img/signup.jpg"
import google from "../img/google-logo.png"
import facebook from "../img/facebook.png"
import { useState } from 'react'
import "../styles/Signup.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  const googleAuth =()=>{
    window.open(
			"http://localhost:5000/auth/google/callback",
			"_self"
		);

  }
  const [name, setname] = useState(" ");
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState(" ");

    async function RegisterUser(e){
        e.preventDefault();
       const response =await fetch("https://seedlingsbackend.onrender.com/signup",{
         method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data = await response.json();
        if(data.status==="ok"){
          alert("register successfully");
          navigate("/login");
          setname("");
          setemail("");
          setpassword("");
        }
    }
  return (
    <>
    <div className='main'>
    <div className='containers'>
        <div className='form-part'>
        <div className='heading'>
        <h5>Already have a Account? <span><Link to="/login">Login</Link></span></h5>
        </div>

           <div className='form'>
           <form onSubmit={RegisterUser}>
           <div className='signup-heading py-3'>
        <h4>Sign up</h4>
        </div>
        <div className="form-group">
    <label for="exampleInputName1">Username</label>
    <input type="name" className="form-control" id="exampleInputName1" value={name} 
        onChange={(e)=> setname(e.target.value)}required placeholder="username" style={{width:407}}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"  value={email} required onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{width:407}}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"  value={password} required  onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:407}}/>
  </div>
  <div class="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">I agree to all the statement included in the <span style={{color:"#6ef415",cursor:"pointer"}}>terms of service</span></label>
  </div>
  <br />
  <div className='form-button'>
  <button type="submit" className="btn">Create Account</button>
  </div>
  <div className="or">
          <p className='myhorizon'><span>or</span></p>
          </div>

  <div className='button-group'>
        <div className='google-button'>
          <button onClick={googleAuth}>
          <img src={google} alt="Photos"/>Sign up with google </button>
        </div>
        <div className='facebook-button'>
          <button > <img src={facebook} alt="Photos" />Sign up with facebook</button>
        </div>
    </div>
</form>
           </div>
        </div>
        <div className='img-part'>
            <img src={signup} alt="Photos" />
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup
