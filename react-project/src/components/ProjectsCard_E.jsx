import './Card.css'
import {Link} from 'react-router-dom';

export function ProjectsCard_E({ project }) {
    console.log(project)
 
    return (
        <>
            <div className="horizontal-card">
                <h2>Employee Name: {project?.task.person_assigned} - Project Name: {project?.proj_name} - Team Size: {project?.team_size} - Estimated Completion Time: {project?.completion_time}</h2>
                <Link to={`/tasks/${project?.proj_id}`}>View Tasks</Link>
    
            </div>

        </>
    )
}