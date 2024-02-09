import { TaskCard } from "../components/TaskCard"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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

    return(
        <>
       <h1>hello</h1>
        <div>{JSON.stringify(project)}</div>
 </>
    )
}


{/* <TaskCard project={project} key={project.id} /> */}
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { PlanetDisplay } from "./PlanetDisplay";

// export function Planet() {
  
// let params = useParams();
// let planetId = params.id;

//   let [planet, setPlanet] = useState([]);

//     getPlanet()
//       .then(plan => setPlanet(plan));
//     }, []);

//   return <><div><pre>
//     <PlanetDisplay planet={planet}/>
//   </pre></div></>
// }