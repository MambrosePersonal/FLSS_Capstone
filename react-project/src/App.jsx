import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import { LoginPage } from './componentPage/LoginPage'
import { HomePage } from './componentPage/HomePage'
import { ProjectsPage_M } from './componentPage/ProjectsPage_M.jsx'
import { AboutPage } from './componentPage/AboutPage'
import { TaskPage_M } from './componentPage/TaskPage_M.jsx'
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
        <Routes>
          <Route path="/" exact Component={HomePage}/>
          <Route path="/projects" element={<ProjectsPage_M  projects={projects}/>}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/about" Component={AboutPage}/>
          <Route path="/tasks/:id" element={<TaskPage_M projects={projects}/>} />
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