import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import { LoginPage } from './componentPage/LoginPage'
import { HomePage } from './componentPage/HomePage'
import { AboutPage } from './componentPage/ManagerPage'
import { NavBar } from './components/NavBar'


function App() {

  return (
    <>
     <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" exact Component={HomePage}/>
          <Route path="/manager" Component={ManagerPage}/>
          <Route path="/login" Component={LoginPage}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App