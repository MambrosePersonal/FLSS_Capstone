// import { useState } from "react"
import { Link } from "react-router-dom"
import { NavigateToTask } from "./NavigateToTask"

export function ProjectsView({project}){
    // const [active, setActive] = useState("task1")
    return(
        <>
        <h1> {project?.assigned_manager} </h1>
        <NavigateToTask/>
        {/* <button onClick={() => setActive("task1")}>Task One</button> */}
        </>
    )
}