import './Card.css'

export function TaskCard_M({ task }) {
  return (
    <>
      <div className="task-card">
        <h2>
        <span className="task-detail">Employee Working on Task: {task?.person_assigned}</span>
          <span className="task-detail">Task: {task?.description}</span>
          <span className="task-detail">Estimated Duration: {task?.estimated_duration}</span>
          <span className="task-detail">Status: {task?.status}</span>
          <span className="task-detail">Due: {task?.due_date}</span>
        </h2>
      </div>
    </>
  )
}
