

import { TaskCard_E } from '../components/TaskCard_E';

export function ProjectsPage_E({ projects, name }) {

    let taskList = [];

    let projNameList = []
   
    console.log(projects)
    for (let project of projects) {
        for (let tasks of project.tasks) {
            if (tasks.person_assigned === "Carla Lopez") {
                taskList.push(tasks)
                projNameList.push(project);
            }
        }
      }



    return (
        <>
            <div>
                <h3>
                    Welcome {taskList[0].person_assigned}
                </h3>
                <div>{taskList?.map(task => <TaskCard_E task={task} key={task.id} />)}</div>
            </div>
        </>
    )
}
