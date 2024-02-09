import { TaskCard } from "../components/TaskCard"

export function TaskPage ({tasks}){
    console.log(tasks)
    return(
        <>
       <h1>hello</h1>
<div>{tasks?.map(task => <TaskCard task={task} key={task.id} />)}</div>
 </>
    )
}