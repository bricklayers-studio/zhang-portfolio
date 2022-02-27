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

window.onload = () => {
  // Toggling Hamburger Menu
  const menu = document.getElementById("mobile-menu");
  document.querySelectorAll(".toggle-trigger").forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
  document.getElementById("menu-button").addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Modal Setup
  var modal = document.getElementById("modal");
  var modalClose = document.getElementById("modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // global modal handler
  document.addEventListener("click", (e) => {
    if (e.target.className.indexOf("modal-target") !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      modal.style.display = "block";
      modalImg.src = img.src;
    }
  });
};
