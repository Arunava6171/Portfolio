// Toggle mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Toggle light/dark mode
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
}

const iconMap = {
  light: {
    college: "./assets/college-icon-black.png",
    hs: "./assets/higher-secondary-icon-black.png",
    secondary: "./assets/secondary-icon-black.png"
  },
  dark: {
    college: "./assets/college-icon-white.png",
    hs: "./assets/higher-secondary-icon-white.png",
    secondary: "./assets/secondary-icon-white.png"
  }
};
}

function updateIconsForTheme(isDark) {
  document.querySelector('.edu-card img[alt="College icon"]').src = isDark ? iconMap.dark.college : iconMap.light.college;
  document.querySelector('.edu-card img[alt="Higher Secondary icon"]').src = isDark ? iconMap.dark.hs : iconMap.light.hs;
  document.querySelector('.edu-card img[alt="Secondary icon"]').src = isDark ? iconMap.dark.secondary : iconMap.light.secondary;
}

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  updateIconsForTheme(isDark);
}
);
