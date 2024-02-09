import './Card.css'
import {TaskPage_M} from '../componentPage/TaskPage_M'
import {Link} from 'react-router-dom';

export function ProjectsCard({ project }) {
    console.log(project)
    const dataToPass = project?.task;
 
    return (
        <>
            <div className="horizontal-card">
                <h2>Manager Name: {project?.assigned_manager} - Project Name: {project?.proj_name} - Team Size: {project?.team_size} - Estimated Completion Time: {project?.completion_time}</h2>
                <Link to={`/tasks/${project?.proj_id}`}>View Tasks</Link>
    
            </div>

        </>
    )
}