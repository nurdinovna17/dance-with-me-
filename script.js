document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section, header.hero");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;

      if (top < triggerBottom) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // при загрузке страницы
});

