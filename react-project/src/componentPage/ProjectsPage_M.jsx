
import { ProjectsCard_M } from "../components/ProjectsCard_M";


export function ProjectsPage_M({ projects, name }) {

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
                <div>{projectList?.map(project => <ProjectsCard_M project={project} key={project.proj_id} />)}</div>
            </div>
        </>
    )
}
