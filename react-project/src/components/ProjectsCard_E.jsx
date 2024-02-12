import './Card.css'
import {Link} from 'react-router-dom';

export function ProjectsCard_E({ project }) {
    console.log(project)
 
    return (
        <>
        <div className="task-card">
        <span className="task-detail"> {project?.assigned_manager}</span>
                <span className="task-detail"> {project?.proj_name}</span>
                <span className="task-detail"> {project?.team_size} </span>
                <span className="task-detail">{project?.completion_time}</span>
                <Link to={`/tasks_E/${project?.proj_id}`}>View Tasks</Link>
            </div>
        </>
    )
}