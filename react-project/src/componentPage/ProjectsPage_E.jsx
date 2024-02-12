import { useLocation } from 'react-router-dom';
import { ProjectsCard_E } from '../components/ProjectsCard_E';

export function ProjectsPage_E({ projects}) {

    const location = useLocation();
    const { name } = location.state || {};
    let projectList = []
    for (let project of projects) {
        for (let task of project.tasks) {
            if (task?.person_assigned == name) {
                projectList.push(project);
            }
        }
    }

    return (
        <>
            <div>
                <h3>
                    Welcome {name}
                </h3>
                <div className="task-card-hotbar">
                <div className="hotbar-detail">Manager</div>
                    <div className="hotbar-detail">Project Name</div>
                    <div className="hotbar-detail">Team Size</div>
                    <div className="hotbar-detail">Estimated Completion Time</div>
                    <div className="hotbar-detail">View Tasks</div>
                </div>
                <div>{projectList?.map(project => <ProjectsCard_E project={project} key={project.proj_id} />)}</div>
            </div>
        </>
    )
}
