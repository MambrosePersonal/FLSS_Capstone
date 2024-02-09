import './Card.css'

export function TaskCard( {task} ) {
    return (
        <>
        <div className="task-card">
      <h2>
        <span className="task-detail">Task: {task?.description}</span>
        <span className="task-detail">Estimated Duration: {task?.estimated_duration}</span>
        <span className="task-detail">Status: {task?.status}</span>
        <span className="task-detail">Due: {task?.due_date}</span>
      </h2>
    </div>
            {/* <div className="horizontal-card">
                <h2> Task: {task?.description} Estimated Duration: {task?.estimated_duration} Status: {task?.status} Due: {task?.due_date}</h2>
            </div> */}

        </>
    )
}
