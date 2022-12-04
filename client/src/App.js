import React from 'react'

import "./assets/styles/app.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {LandingPage, Error404, LoginPage} from "./views";
import Admin from "./layouts/Admin";

const app = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/admin/*' element={<Admin/>} />
                <Route path='/login' element={<LoginPage/>} />
                
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/404'  element={<Error404/>} />
                <Route path="/*" element={<Navigate to={'/404'}/>}/>
            </Routes>
            
        </BrowserRouter>
      
    </>
  )
}

export default app