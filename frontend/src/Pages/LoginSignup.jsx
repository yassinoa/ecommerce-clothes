import React, { useState } from 'react'
import  "./css/LoginSignup.css"
const LoginSignup = () => {
  const [log, setLog] = useState("Login")
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{log}</h1>
        <div className="loginsignup-fields">
          {log==="Sign Up"? <input type="text" placeholder="Your name" name="username" />:<></>}
          <input type="email" placeholder="Email address" name="email" />
          <input type="password" placeholder="Password" name="password" />
        </div>

        
        <button>Continue</button>
        {log==="Sign Up"?(<p className="loginsignup-login">Already have an account? <span onClick={()=> {setLog("Login")}}>Login here</span></p>)
        :(<p className="loginsignup-login">Create an account? <span onClick={()=> {setLog("Sign Up")}}>Click here</span></p>)
  }
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup