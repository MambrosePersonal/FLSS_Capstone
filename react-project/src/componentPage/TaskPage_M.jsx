import { TaskCard_M } from "../components/TaskCard_M"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HotBar.css"
import { useNavigate } from "react-router-dom";
import { AddPage } from "./AddPage";

export function TaskPage_M({ projects }) {
    let params = useParams();
    let projectId = params.id;
    const navigate = useNavigate();

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
    const id = { projectid: project?.proj_id };
    console.log(id)



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
                    <button onClick={() => navigate('/add', { state: { tasks: taskList } })}>Add Task</button>

                    {/* <button onClick={<AddPage tasks = {taskList}/>}>Add</button> */}
                </h2>
            </div>
            <div>
                <div>{taskList?.map(task => <TaskCard_M task={task} key={task.id} />)}</div>
            </div>
        </>
    )
}