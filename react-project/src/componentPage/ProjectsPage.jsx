
import { ProjectsCard } from "../components/ProjectsCard";


export function ProjectsPage({ projects }) {

    let projectList = []
    for (let manProject of projects) {
        if (manProject?.assigned_manager == "Joseph Parker") {
          projectList.push(manProject);
        }
      }
    return (
        <>
            <div>
                <h3>
                    Welcome {projectList[0].assigned_manager}
                </h3>
                <div>{projectList?.map(project => <ProjectsCard project={project} key={project.proj_id} />)}</div>
            </div>
        </>
    )
}
