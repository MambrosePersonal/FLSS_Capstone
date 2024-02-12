import './Card.css'

export function TaskCard_E({ task }) {
  return (
    <>
      <div className="task-card">
  
        <span className="task-detail">{task?.person_assigned}</span>
          <span className="task-detail">{task?.description}</span>
          <span className="task-detail">{task?.estimated_duration} Hours</span>
          <span className="task-detail">{task?.status}</span>
          <span className="task-detail">{task?.due_date}</span>
    
      </div>
    </>
  )
}
