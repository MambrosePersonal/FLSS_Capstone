import './Card.css'

export function TaskCard_E({ task }) {
  return (
    <>
      <div className="task-card">
        <h2>
          <span className="task-detail">{task?.description}</span>
          <span className="task-detail">{task?.estimated_duration}</span>
          <span className="task-detail">{task?.status}</span>
          <span className="task-detail">{task?.due_date}</span>
        </h2>
      </div>
    </>
  )
}
