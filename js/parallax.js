const images = document.querySelectorAll(".parallax-img");
const body = document.querySelector("body");
const weddingImages = document.querySelectorAll(".wedding-images img");
window.onload = function () {
  lax.setup({
    breakpoints: { small: 0, large: 1023 },
  }); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

window.addEventListener(
  "DOMContentLoaded",
  setTimeout(() => {
    weddingImages.forEach((image) => {
      image.classList.add("lax");
      lax.addElement(image);
    });
  }, 700)
);
