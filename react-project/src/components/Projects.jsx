
import { Link } from "react-router-dom"
import { NavigateToTask } from "./NavigateToTask"
import { ProjectsCard } from "./ProjectsCard"
import { getManagerProjects } from "../functions/getManagerProjects"

export function Projects({projects}){
    console.log(projects)
    let projectList = []
    for (let manProject of projects) {
        if (manProject?.assigned_manager == "Joseph Parker") {
          projectList.push(manProject);
        }
      }
      console.log(projects)
      console.log(projectList)
    // let managerProj = getManagerProjects(projects, "Joseph Parker")
    // console.log(managerProj)
    return(
        <>
        <div> {projects?.assigned_manager} </div>
        <div>{projects?.map(project => <ProjectsCard project={project} key={project.proj_id} />)}</div>
        {/* <button onClick={() => setActive("task1")}>Task One</button> */}
        </>
    )
}