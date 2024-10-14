import React, {useState} from 'react'

export default function SignUp() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit")
    }
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>

                <div>
                <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                <button>Sign Up</button>
            </form>

        </div>
    )
}