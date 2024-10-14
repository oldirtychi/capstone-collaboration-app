import React, {useState} from 'react'

export default function SignUp() {

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit", email, password)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange = {e=>setEmail(e.target.value)}/>
                </div>

                <div>
                <label htmlFor="">Password</label>
                    <input type="text" onChange = {e=>setPassword(e.target.value)}/>
                </div>
                <button>Sign Up</button>
            </form>

        </div>
    )
}