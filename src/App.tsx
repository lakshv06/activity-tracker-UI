// import { useState } from 'react'
import './App.css'
import './css/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import BouncyLogo from './pages/BouncyLogo'
function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<SignInPage/>}>
        <Route index element={<BouncyLogo/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
