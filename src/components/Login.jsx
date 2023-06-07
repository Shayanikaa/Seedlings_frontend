import React,{useState} from 'react'
import "../styles/Login.css"
import LoginImg from "../img/login.jpg"
import google from "../img/google-logo.png"
import facebook from "../img/facebook.png"
import { Link } from 'react-router-dom'
// { useNavigate } from 'react-router-dom'

function Login() {
 // const navigate = useNavigate();
  const googleAuth =()=>{
    window.open(
			"https://seedlingsbackend.onrender.com/auth/google/callback",
			"_self"
		);

  }
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  async function LoginUser(e){
      e.preventDefault();
     const response =await fetch("https://seedlingsbackend.onrender.com/api/login",{
       method:"POST",
       withCredentials:false,
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify({
              email,
              password
          }),
      })
      const data = await response.json()
      if(data.User){
        sessionStorage.setItem('token',data.User);
          alert("login successfully");
          window.location.href="/products";
          setemail("");
        setpassword("");
      }
      else{
          alert("please check your login details");
      }
  }
    return (
        <>
        <div className='main'>
        <div className='containers'>
            <div className='form-part'>
            <div className='heading'>
            <h5>Don't have a Account? <span><Link to="/signin">Sign up</Link></span></h5>
            </div>
    
               <div className='form'>
               <form  onSubmit={LoginUser}>
               <div className='signup-heading py-3'>
            <h4>Welcome Back</h4>
            </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control"  value={email} id="exampleInputEmail1"  onChange={(e)=>setemail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" style={{width:407}}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" value={password} className="form-control"  onChange={(e)=>setpassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" style={{width:407}}/>
      </div>
      <br />
      <div className='form-button'>
      <button type="submit"  value="register" className="btn">Login</button>
      </div>
      <div className="or">
              <p className='myhorizon'><span>or</span></p>
              </div>
    
      <div className='button-group'>
            <div className='google-button'>
              <button>
              <img src={google} onClick={googleAuth} alt="Photos"/>Login with google </button>
            </div>
            <div className='facebook-button'>
              <button > <img src={facebook} alt="Photos" />Login with facebook</button>
            </div>
        </div>
    </form>
               </div>
            </div>
            <div className='img-part'>
                <img src={LoginImg} alt="Photos" />
            </div>
        </div>
        </div>
        </>
      )
 
}

export default Login
