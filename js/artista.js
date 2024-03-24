// Escucha el evento de clic en los elementos del menú
const menuItems = document.querySelectorAll(".nav-menu__item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Oculta automáticamente la lista de elementos al hacer clic
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.checked = false;
  });
});

window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });
  document
    .querySelector(".scroll-to-top")
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
