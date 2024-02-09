import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import { LoginPage } from './componentPage/LoginPage'
import { HomePage } from './componentPage/HomePage'
import { ProjectsPage } from './componentPage/ProjectsPage.jsx'
import { AboutPage } from './componentPage/AboutPage'
import { TaskPage } from './componentPage/TaskPage.jsx'
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
          <Route path="/projects" element={<ProjectsPage  projects={projects}/>}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/about" Component={AboutPage}/>
          <Route path="/tasks" element={<TaskPage/>} />
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