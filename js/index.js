
//Index Html
const skillsContainer = document.getElementById("skills-container");
if (skillsContainer) {
  skillsContainer.innerHTML = skillCategories
    .map(category => `
      <div class="skill-category">
        <h3 class="skill-category-title">${category.title}</h3>
        <div class="skill-tags">
          ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")}
        </div>
      </div>
    `)
    .join("");
}

const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
  projectsContainer.innerHTML = projects
    .map(project => `
      <div class="project-card">
        <!-- Left side -->
        <div class="project-left">
          <div class="project-video-box">
            <video src="${project.video}" autoplay loop muted playsinline></video>
          </div>

          ${project.contributors ? `
          <div class="project-contributors-row">
            <span>Contributors: ${project.contributors}</span>
          </div>` : ""}

          ${project.links.map(link => `
          <div class="project-link-row">
            <span>${link.label}</span>
            <a href="${link.url}" target="_blank">${link.url}</a>
          </div>`).join("")}
        </div>

        <!-- Right side -->
        <div class="project-right">
          <h3 class="project-name">${project.name}</h3>
          <p class="project-desc">${project.description}</p>

          <h4 class="project-list-name">${project.listTitle}</h4>
          <ul class="project-list">
            ${project.list.map(item => `<li>${item}</li>`).join("")}
          </ul>

          <h4 class="project-skills-title">Skills and Tools</h4>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    `)
    .join("");
}
