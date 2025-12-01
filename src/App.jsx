import React from 'react'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import UserLandingpage from './pages/UserLandingpage.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
function App() {
  return (  
   // <Signup/>
   //  <Login/>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<UserLandingpage/>}/>
      </Routes> 
   </BrowserRouter>
  
  )
}

export default App
