const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

// Carl
window.onload = () => {
  const hamburgerButton = document.getElementById("menu-button");
  const menu = document.getElementById("mobile-menu");

  console.log(hamburgerButton);
  console.log(menu);
  hamburgerButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
};
