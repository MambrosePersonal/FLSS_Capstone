import { Projects } from "../components/Projects"

export function ManagerPage({ projects }) {
    return (
        <>
            <div>
                <h3>
                    Welcome {projects[0]?.assigned_manager}
                </h3>
                <div><Projects projects={projects} /></div>
            </div>
        </>
    )
}
