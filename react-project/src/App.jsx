import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import { LoginPage } from './componentPage/LoginPage'
import { HomePage } from './componentPage/HomePage'
import { ManagerPage } from './componentPage/ManagerPage'
import { AboutPage } from './componentPage/AboutPage'

import { NavBar } from './components/NavBar'

import { getProjects } from './functions/getProjects.js';

function App() {

  let [projects, setProjectList] = useState([]);

  useEffect(() => {
    getProjects()
      .then(projects => setProjectList(projects));
  }, []);


  return (
    <>
     <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" exact Component={HomePage}/>
          <Route path="/manager" element={<ManagerPage  projects={projects}/>}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/about" Component={AboutPage}/>
        </Routes>
      </div>
    </Router>

    <footer>
        Copyright &copy; {(new Date()).getFullYear()} frozenlakes
      </footer>
    </>
  )
}

export default App