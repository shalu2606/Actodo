import React from "react";
import {BrowserRouter,Routes,Route} from"react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

import { useState } from "react";
function App()
{
  const [users,setusers]=useState([
    {
        username:"Shalini",
        password:"123"

        
    }
])
  return(
<div>
  <BrowserRouter>
 <Routes>
  <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
  <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
  <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
  </BrowserRouter>
  
 </div>
  )
}


export default App;
