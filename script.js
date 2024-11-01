function filterProjects() {
    const filter = document.getElementById('projectFilter').value.toLowerCase();
    const projectList = document.getElementById('projectList');
    const projects = projectList.getElementsByTagName('li');

    for (let i = 0; i < projects.length; i++) {
        const projectTitle = projects[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (projectTitle.includes(filter)) {
            projects[i].style.display = '';
        } else {
            projects[i].style.display = 'none';
        }
    }
}
