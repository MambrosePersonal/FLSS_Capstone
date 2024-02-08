import { ProjectsView } from "../components/ProjectsView"

export function ManagerPage( {projects} ){
    return(<>
       <h1> Manager Page </h1>
       <div>
        <h3>
            {projects[0]?.assigned_manager}
        </h3>
        <div> <ProjectsView project={projects[0]}/> </div>
        
       </div>
       </>
    )
}
