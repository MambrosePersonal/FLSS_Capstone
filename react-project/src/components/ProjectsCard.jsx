import './Card.css'
import { useState } from "react"
import {TaskPage_M} from '../componentPage/TaskPage_M'
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

export function ProjectsCard({ project }) {
    console.log(project)
    const dataToPass = project?.task;

    const navigate = useNavigate();
    // function handleClick() {
    //     navigate('/tasks', {state:dataToPass} )
    // }
    return (
        <>
            <div className="horizontal-card">
                <h2>Manager Name: {project?.assigned_manager} - Project Name: {project?.proj_name} - Team Size: {project?.team_size} - Estimated Completion Time: {project?.completion_time}</h2>
                {/* <button onClick={handleClick}>View Tasks</button> */}
                <Link to={`/tasks/${project?.proj_id}`}>View Tasks</Link>
    
            </div>

        </>
    )
}