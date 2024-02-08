export async function getProjects() {
    const url = `/api/projects`;
    let projects = await fetch(url)
      .then((res) => res.json());
    return projects;
  }