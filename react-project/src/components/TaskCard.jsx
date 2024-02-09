import './Card.css'
import { useLocation } from 'react-router-dom';


export function TaskCard() {
    const location = useLocation();
  const task = location.state;
    return (
        <>
<div className="horizontal-card">
                <h2> Task Description: {task.description} </h2>
        
            </div>
        </>
    )
}