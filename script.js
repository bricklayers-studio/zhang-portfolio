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

// Toggling Hamburger Menu
window.onload = () => {
  const menu = document.getElementById("mobile-menu");
  document.querySelectorAll('.toggle-trigger').forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.add("hidden");
    })
  });
  document.getElementById('menu-button').addEventListener('click', () => {
    menu.classList.toggle('hidden');
  })
};

