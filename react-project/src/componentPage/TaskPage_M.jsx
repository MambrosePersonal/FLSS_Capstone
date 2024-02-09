import { TaskCard_M } from "../components/TaskCard_M"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HotBar.css"

export function TaskPage_M({ projects }) {
    let params = useParams();
    let projectId = params.id;

    let [project, setProject] = useState([]);

    useEffect(() => {
        async function getProject() {
            const url = `/api/projects/${projectId}`;
            let newProject = await fetch(url)
                .then((res) => res.json())
            return newProject;
        }

        getProject()
            .then(project => setProject(project));
    }, []);
    console.log(project)

    let taskList = project.tasks

    return (
        <>
        <div className="task-card-hotbar">
                <h2>
                    <span className="hotbar-detail">Task:</span>
                    <span className="hotbar-detail">Estimated Duration:</span>
                    <span className="hotbar-detail">Status:</span>
                    <span className="hotbar-detail">Due:</span>
                </h2>
            </div>
            <div></div>
            <div>
                <div>{taskList?.map(task => <TaskCard_M task={task} key={task.id} />)}</div>
            </div>
        </>
    )
}