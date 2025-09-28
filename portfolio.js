document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Highlight active link
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 65;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.id;
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(a => a.classList.remove("active"));
        document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add("active");
      }
    });
  });

  // Fade-in text
  const videoText = document.querySelector(".video-text");
  if (videoText) {
    videoText.style.opacity = 0;
    setTimeout(() => {
      videoText.style.transition = "opacity 1.5s";
      videoText.style.opacity = 1;
    }, 300);
  }

  // Form validation
  const contactForm = document.querySelector("form");
  contactForm?.addEventListener("submit", e => {
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!email || !message) {
      e.preventDefault();
      alert("Please fill in both email and message before submitting.");
    }
  });
});
