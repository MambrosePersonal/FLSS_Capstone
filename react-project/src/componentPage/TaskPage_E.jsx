import { TaskCard_E } from "../components/TaskCard_E"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HotBar.css"
import { Link } from "react-router-dom";

export function TaskPage_E({ projects }) {
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
        <h1> {project.proj_name} Tasks</h1>
            <div className="task-card-hotbar">
                <h2>

                    <span className="hotbar-detail">Assigned To</span>
                    <span className="hotbar-detail">Description</span>
                    <span className="hotbar-detail">Duration</span>
                    <span className="hotbar-detail">Status</span>
                    <span className="hotbar-detail">Due Date</span>
                </h2>
            </div>
            <div>
                <div>{taskList?.map(task => <TaskCard_E task={task} key={task.id} />)}</div>
            </div>
        </>
    )
}