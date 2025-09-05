// ===== Mobile Navbar Toggle =====
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// ===== Dark Mode Toggle =====
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button icon between ☀️ and 🌙
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeToggle.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ===== Load Saved Theme on Refresh =====
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️";
  } else {
    darkModeToggle.innerHTML = "🌙";
  }
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  for (let i = 0; i < revealElements.length; i++) {
    const elementTop = revealElements[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      revealElements[i].classList.add("active");
    } else {
      revealElements[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
