import './Card.css'
import {Link} from 'react-router-dom';

export function ProjectsCard_M({ project }) {


    console.log(project)

 
    return (
      <>
            {/* Task card */}
            <div className="task-card">
                <span className="task-detail"> {project?.proj_name}</span>
                <span className="task-detail"> {project?.team_size} </span>
                <span className="task-detail">{project?.completion_time}</span>
                <Link to={`/tasks_M/${project?.proj_id}`} className="buttonStyle">View Tasks</Link>
            </div>
        </>
    )
}