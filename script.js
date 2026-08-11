const galleryPhotos = Array.from(document.querySelectorAll(".gallery-item img"));
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
let currentPhotoIndex = 0;

function showPhoto(index) {
  currentPhotoIndex = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[currentPhotoIndex];
  lightboxImage.src = photo.currentSrc || photo.src;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = photo.closest("figure").querySelector("figcaption").textContent;
}

function openLightbox(index) {
  showPhoto(index);
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

galleryPhotos.forEach((photo, index) => {
  photo.closest(".gallery-item").addEventListener("click", () => openLightbox(index));
});

lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => showPhoto(currentPhotoIndex - 1));
lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => showPhoto(currentPhotoIndex + 1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPhoto(currentPhotoIndex - 1);
  if (event.key === "ArrowRight") showPhoto(currentPhotoIndex + 1);
});


document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-status").textContent =
    "Bedankt. Dit is een mock-up: koppel voor publicatie een formulierdienst zoals Formspree aan dit formulier.";
});