import { useState } from 'react'
import './styles/App.css'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Portal from './Portal'
import NavBar from './NavBar'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

function App() {

  const [userAuth,setUserAuth] = useState(null)

  return ( 
    <>

     <div className="container">

        <BrowserRouter>
          <NavBar userAuth={userAuth}/>
          <Routes>
           <Route path="/" element={<Portal/>}/>
           <Route path="/signup" element={<SignUp/>}/>
           <Route path="/signin" element={<SignIn/>}/>

            
     {/* <SignUp/> */}
     {/* <SignIn setUserAuth={setUserAuth}/> */}
     {/* <Portal/> */}

          </Routes>
        </BrowserRouter>
     </div>
    </>
  )
}

export default App
