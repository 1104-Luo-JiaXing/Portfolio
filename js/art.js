
//Art Html

// Builds a gallery
function renderGallery(containerId, artworks) {
  const container = document.getElementById(containerId);
  if (!container) return;

  artworks.forEach(art => {
    container.innerHTML += `
      <div class="arts-item" data-desc="${art.description || ""}">
        <div class="arts-box">
          <div class="arts-image-wrapper">
            <img class="arts-image" src="${art.src}" alt="${art.title}">
          </div>
        </div>
        <p class="arts-name">${art.title}</p>
      </div>
    `;
  });
}


// Build the galleries
renderGallery("pixel-gallery", pixelArtworks);
renderGallery("digital-gallery", digitalArtworks);
renderGallery("traditional-gallery", traditionalArtworks);
renderGallery("model-gallery", modelArtworks);

// Pop-up window (unchanged, works for every gallery)
const modal = document.getElementById("art-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalClose = document.getElementById("modal-close");
const modalDesc = document.getElementById("modal-desc");

document.addEventListener("click", (e) => {
  const item = e.target.closest(".arts-item");
  if (!item) return;

  const img = item.querySelector(".arts-image");
  const desc = item.dataset.desc;

  modalImg.src = img.src;
  modalImg.alt = img.alt;
  modalTitle.textContent = img.alt;
  modalDesc.textContent = desc;
  modalDesc.style.display = desc ? "block" : "none";   // hides it when there's no description
  modalImg.classList.toggle("pixel", !!item.closest("#pixel-gallery"));
  modal.classList.add("open");
});

// Close with the X
modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Close by clicking the dark area outside the window
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

// Close with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.remove("open");
});