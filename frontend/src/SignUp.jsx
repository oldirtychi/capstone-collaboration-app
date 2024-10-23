import React, {useState} from 'react'
import {auth} from './config.js'
import {createUserWithEmailAndPassword} from "firebase/auth"

export default function SignUp() {

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState(null)
    const [success,setSuccess]=useState(null)
    const [loading, setLoading]=useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Submit", email, password)
        // set.error(null)
        setSuccess(null)
        setLoading(true)


    try {
        let response = await createUserWithEmailAndPassword(auth,email,password)
        console.log(response)
        setError(null)
        setSuccess("You have successfully created an account!")
    } catch (error) {
        console.log(error.code)
        setError(error.code)  
        console.error(error);
    }
    setLoading(false)
}


    return (
        <div>
        <form action="" onSubmit={handleSubmit}>

                <div className="login-page">
                    <div className="login-container">
                    <h2>Create New Account</h2>
                    <input type="text" placeholder="Username" onChange = {e=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"onChange = {e=>setPassword(e.target.value)}/>
                    <button>Sign Up</button> 
                        {loading && <h5>Loading</h5>}
                        {success && <h5>You have successfully created an account!</h5>}
                        {error && <h5>{error}</h5>}
                    </div>
                </div>  
            </form> 
    </div>
        // <div>
        //     <form action="" onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="">Email</label>
        //             <input type="text" onChange = {e=>setEmail(e.target.value)}/>
        //         </div>

        //         <div>
        //         <label htmlFor="">Password</label>
        //             <input type="text" onChange = {e=>setPassword(e.target.value)}/>
        //         </div>
        //         {loading?"loading": <button>Sign Up</button> }
        //         <h5>{error}</h5>
        //         <h5>{success}</h5>
        //     </form>


        // </div>
    )
}