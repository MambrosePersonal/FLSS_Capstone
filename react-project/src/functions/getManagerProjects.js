export async function getManagerProjects(projects) {
    let projectList = []
    for (let manProject of projects) {
        if (manProject?.assigned_manager == "Joseph Parker") {
          projectList.push(manProject);
        }
      }
    return projectList;
  }