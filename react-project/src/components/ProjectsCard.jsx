import './Card.css'
import { useState } from "react"
import { TasksCard } from './TasksCard';

export function ProjectsCard({ project }) {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <>
            <div className="horizontal-card">
                <h2>Team Name: {project?.proj_name} - Team Size: {project?.team_size} - Estimated Completion Time: {project?.completion_time}</h2>
                <button onClick={() => setShowComponent(true)}>View Tasks</button>
                {showComponent && <TasksCard />}
            </div>

        </>
    )
}