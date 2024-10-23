import React, {useState} from 'react'
import {auth} from "./config"
import {signInWithEmailAndPassword} from "firebase/auth"
import './styles/SignIn.css'


export default function SignIn({setUserAuth}) {

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState(null)
    const [success,setSuccess]=useState(null)
    const [loading, setLoading]=useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
    setSuccess(false)
    setError(null)
    setLoading(true)

    try {
        let response = await signInWithEmailAndPassword(auth,email,password)
        console.log("🚀 ~ handleSubmit ~ response:", response.user)
        navigate("/")
        setUserAuth(response.user)
        setSuccess(true)
        
    } catch (error) {
        console.error(error)
        setError(error.code)
    }
        setLoading(false)   
  
}

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>

                <div className="login-page">
                    <div className="login-container">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" onChange = {e=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"onChange = {e=>setPassword(e.target.value)}/>
                    <button>Log In</button> 
                        {loading && <h5>Loading</h5>}
                        {success && <h5>Successfully Logged In</h5>}
                        {error && <h5>{error}</h5>}
                    </div>
                </div>
                {/* <div>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange = {e=>setEmail(e.target.value)}/>
                </div>

                <div>
                <label htmlFor="">Password</label>
                    <input type="text" onChange = {e=>setPassword(e.target.value)}/>
                </div> */}
                
            </form> 
    </div>
  )
}
