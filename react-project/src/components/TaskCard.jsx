import './Card.css'

export function TaskCard( {task} ) {
    return (
        <>
            <div className="horizontal-card">
                <h2>Person Assigned: {task?.person_assigned} - Description: {task?.description}</h2>
            </div>

        </>
    )
}
