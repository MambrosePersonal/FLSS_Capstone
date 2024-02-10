import { TaskCard } from "../components/TaskCard"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export function TaskPage_M ({projects}){
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
                <div>
                    <div>{taskList?.map(task => <TaskCard task={task} key={task.id} />)}</div>
                </div>
            </>
        )
}
