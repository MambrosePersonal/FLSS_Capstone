import './Card.css'
import {TaskPage_M} from '../componentPage/TaskPage_M'
import {Link} from 'react-router-dom';

export function ProjectsCard({ project }) {
    console.log(project)
    const dataToPass = project?.task;
 
    return (
        <>
              <div className="task-card">
      <h2>
        <span className="task-detail">Manager Name: {project?.assigned_manager} </span>
        <span className="task-detail">Project Name: {project?.proj_name}</span>
        <span className="task-detail">Team Size: {project?.team_size} </span>
        <span className="task-detail">Estimated Completion Time: {project?.completion_time}</span>
        <Link to={`/tasks/${project?.proj_id}`}>View Tasks</Link>
      </h2>
    </div>

        </>
    )
}