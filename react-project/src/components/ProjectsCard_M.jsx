import './Card.css'
import {TaskPage_M} from '../componentPage/TaskPage_M'
import {Link} from 'react-router-dom';

export function ProjectsCard_M({ project }) {
    console.log(project)
    const dataToPass = project?.task;
 
    return (
        <>
                 <div className="task-card-hotbar">
      <div className="hotbar-detail">Task:</div>
      <div className="hotbar-detail">Estimated Duration:</div>
      <div className="hotbar-detail">Status:</div>
      <div className="hotbar-detail">Due:</div>
    </div>
      <h2>
        <span className="task-detail">Project Name: {project?.proj_name}</span>
        <span className="task-detail">Team Size: {project?.team_size} </span>
        <span className="task-detail">Estimated Completion Time: {project?.completion_time}</span>
        <Link to={`/tasks/${project?.proj_id}`}>View Tasks</Link>
      </h2>
  

        </>
    )
}