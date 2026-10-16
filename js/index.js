
// Index Html

// Skills
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


// Projects
const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
  projectsContainer.innerHTML = projects
    .map(project => `
      <div class="project-card theme-${project.theme}">
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

// Contact form
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "16f28e51-1004-485b-9bc7-e60467ba5403");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
