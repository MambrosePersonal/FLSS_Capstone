import './Card.css'
import {Link} from 'react-router-dom';

export function ProjectsCard_M({ project }) {
    console.log(project)
    const dataToPass = project?.task;
 
    return (
      <>
            {/* Task card */}
            <div className="task-card">
                <span className="task-detail"> {project?.proj_name}</span>
                <span className="task-detail"> {project?.team_size} </span>
                <span className="task-detail">{project?.completion_time}</span>
                <Link to={`/tasks/${project?.proj_id}`}>View Tasks</Link>
            </div>
        </>
    )
}