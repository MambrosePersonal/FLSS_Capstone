import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import { LoginPage } from './componentPage/LoginPage'
import { HomePage } from './componentPage/HomePage'
import { ProjectsPage_M } from './componentPage/ProjectsPage_M.jsx'
import { ProjectsPage_E } from './componentPage/ProjectsPage_E.jsx'
import { AboutPage } from './componentPage/AboutPage'
import { TaskPage_M } from './componentPage/TaskPage_M.jsx'
import {TaskPage_E} from "./componentPage/TaskPage_E.jsx"
import { getProjects } from './functions/getProjects.js';
import { AddPage } from './componentPage/AddPage.jsx'

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
          <Route path="/projects-manager" element={<ProjectsPage_M  projects={projects}/>}/>
          <Route path="/projects-employee" element={<ProjectsPage_E  projects={projects}/>}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/about" Component={AboutPage}/>
          <Route path="/tasks_M/:id" element={<TaskPage_M projects={projects}/>} />
          <Route path="/tasks_E/:id" element={<TaskPage_E projects={projects}/>} />
          <Route path="/add" Component={AddPage}/>
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