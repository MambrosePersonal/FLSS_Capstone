import "./HotBar.css"
import "./Cardd.css"
import { TaskCard_M } from "../components/TaskCard_M";
import { useLocation } from "react-router-dom";


export function AddedPage(){

    const location = useLocation();
    const { tasks } = location.state || {};

    return(
        <>
        <h1>HitSchool Tasks</h1>
        <h2>
            
        <span className="hotbar-detail">Assigned To</span>
                    <span className="hotbar-detail">Description</span>
                    <span className="hotbar-detail">Duration</span>
                    <span className="hotbar-detail">Status</span>
                    <span className="hotbar-detail">Due Date</span>
        </h2>
        <div>
                <div>{tasks?.map(task => <TaskCard_M task={task} key={task.id} />)}</div>
            </div>
            <div className="task-card">
                <span className="task-detail">Nicky</span>
                <span className="task-detail">Hello World</span>
                <span className="task-detail">5 Hours </span>
                <span className="task-detail">incomplete</span>
                <span className="task-detail">2024-16-02</span>
            </div>
        </>
    )
}