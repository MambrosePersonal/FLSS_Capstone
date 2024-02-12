
import { ProjectsCard_M } from "../components/ProjectsCard_M";
import { useLocation } from "react-router-dom";

export function ProjectsPage_M({ projects}) {

    const location = useLocation();
    const { name } = location.state || {};
    console.log(name)
    let projectList = []
    for (let manProject of projects) {
        if (manProject?.assigned_manager == name) {
          projectList.push(manProject);
        }
      }
    return (
        <>
            <div>
                <h3>
                    Welcome {name}
                </h3>
                {/* Render hotbar outside the loop */}
                <div className="task-card-hotbar">
                    <div className="hotbar-detail">Project Name</div>
                    <div className="hotbar-detail">Team Size</div>
                    <div className="hotbar-detail">Estimated Completion Time</div>
                    <div className="hotbar-detail">View Tasks</div>
                </div>
                {/* Render ProjectsCard_M components */}
                <div>{projectList?.map(project => <ProjectsCard_M project={project} key={project.proj_id} />)}</div>
            </div>
        </>
    )
}
