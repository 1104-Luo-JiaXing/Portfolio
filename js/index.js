
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

          ${(() => {
            const raw = project.images || (project.image ? [project.image] : []);
            const images = raw.map(item => typeof item === "string" ? { src: item, title: "" } : item);
            if (!images.length) return "";
            return `
              <div class="carousel" data-index="0">
                ${images.some(img => img.title) ? `<p class="carousel-title">${images[0].title || ""}</p>` : ""}
                <div class="project-image-box">
                  <div class="carousel-track">
                    ${images.map((img, i) => `
                      <div class="carousel-slide" data-title="${img.title || ""}">
                        <img src="${img.src}" alt="${img.title || project.title + " preview " + (i + 1)}" loading="lazy">
                      </div>`).join("")}
                  </div>
                  ${images.length > 1 ? `
                    <button type="button" class="carousel-btn carousel-prev" aria-label="Previous image">&#10094;</button>
                    <button type="button" class="carousel-btn carousel-next" aria-label="Next image">&#10095;</button>
                    <span class="carousel-count">1 / ${images.length}</span>` : ""}
                </div>
              </div>`;
          })()}

          ${project.type ? `
          <p class="project-type">${project.type}</p>` : ""}

          ${project.contributors ? `
          <div class="project-contributors-row">
            <span>${project.contributors}</span>
          </div>` : ""}

          ${project.links.map(link => `
          <div class="project-link-row">
            <span>${link.label}</span>
            <a href="${link.url}" target="_blank">${link.url}</a>
          </div>`).join("")}

          <h4 class="project-skills-title">Skills and Tools I used</h4>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>

        <!-- Right side -->
        <div class="project-right">
          <h3 class="project-name">${project.name}</h3>
          <p class="project-desc">${project.description}</p>

          <h4 class="project-list-name">${project.listTitle}</h4>
          
          <ul class="project-list">
            ${project.list.map(item => `<li>${item}</li>`).join("")}
          </ul>

        </div>
      </div>
    `)
    .join("");
}

// Project image carousel
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".carousel-btn");
  if (!btn) return;

  const box = btn.closest(".carousel");
  const track = box.querySelector(".carousel-track");
  const total = track.children.length;
  let index = Number(box.dataset.index);

  index = btn.classList.contains("carousel-next")
    // after the last image, go back to the first
    ? (index + 1) % total
    // before the first image, go to the last
    : (index - 1 + total) % total;

  box.dataset.index = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  box.querySelector(".carousel-count").textContent = `${index + 1} / ${total}`;

  const title = box.querySelector(".carousel-title");
  if (title) title.textContent = track.children[index].dataset.title;
});

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
