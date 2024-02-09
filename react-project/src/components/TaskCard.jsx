import './Card.css'

export function TaskCard( {project} ) {
    if (!project) return undefined;
    return (
      <section >
        <h1>{project.tasks[1]}</h1>
          <div>
          </div>
      </section>
    )
}

// export function TaskCard( {projects, proj_id} ) {
    
//     let taskList = []
//     for (let tProject of projects) {
//         if (tProject?.id == proj_id) {
//           taskList.push(tProject);
//         }
//       }

//     return (
//         <>
//             <div className="horizontal-card">
//             {taskList?.map(project => project={project}, key={proj_id} )}
//                 <h2> Task Description: {project.task.description} </h2>
//             </div>
//         </>
//     )
// }