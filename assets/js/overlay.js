document
  .querySelectorAll(".navbar .mega-dropdown")
  .forEach(function (dropdown) {
    const menu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function () {
      document
        .querySelectorAll(".navbar .mega-dropdown")
        .forEach(function (dropdown) {
          dropdown.classList.remove("show");
          const menu = dropdown.querySelector(".dropdown-menu");
          if (menu) {
            menu.classList.remove("show");
          }
        });
      dropdown.classList.add("show");
      if (menu) {
        menu.classList.add("show");
      }
      showOverlay();
    });

    if (document.querySelector(".top-nav-dark")) {
      document
        .querySelector(".top-nav-dark")
        .addEventListener("mouseenter", function (event) {
          if (menu && isLeavingUpper(menu, event)) {
            dropdown.classList.remove("show");
            menu.classList.remove("show");
            hideOverlay();
          }
        });
    }
    if (document.querySelector(".top-nav-light")) {
      document
        .querySelector(".top-nav-light")
        .addEventListener("mouseenter", function (event) {
          if (menu && isLeavingUpper(menu, event)) {
            dropdown.classList.remove("show");
            menu.classList.remove("show");
            hideOverlay();
          }
        });
    }

    dropdown.addEventListener("mouseleave", function (event) {
      if (
        menu &&
        (isLeavingBelow(menu, event) ||
          isLeavingLeft(menu, event) ||
          isLeavingRight(menu, event))
      ) {
        dropdown.classList.remove("show");
        menu.classList.remove("show");
        hideOverlay();
      }
    });

    let scrollCount = 0;
    document.addEventListener("scroll", function () {
      scrollCount++;
      if (scrollCount >= 2) {
        document
          .querySelectorAll(".navbar .mega-dropdown")
          .forEach(function (dropdown) {
            dropdown.classList.remove("show");
            const menu = dropdown.querySelector(".dropdown-menu");
            if (menu) {
              menu.classList.remove("show");
            }
          });
        hideOverlay();
        scrollCount = 0;
      }
      setTimeout(() => {
        scrollCount = 0;
      }, 1000);
    });

    document.querySelectorAll(".nav-item-hover").forEach((item, index) => {
      const tabPanes = document.querySelectorAll(".tab-pane");
      item.addEventListener("mouseenter", () => {
        tabPanes.forEach((tab) => tab.classList.remove("active"));
        tabPanes[index].classList.add("active");
      });
    });
  });

function isLeavingLeft(element, event) {
  const rect = element.getBoundingClientRect();
  return event.clientX < rect.left;
}
function isLeavingRight(element, event) {
  const rect = element.getBoundingClientRect();
  return event.clientX > rect.right;
}
function isLeavingBelow(element, event) {
  const rect = element.getBoundingClientRect();
  return event.clientY > rect.bottom - 20;
}
function isLeavingUpper(element, event) {
  const rect = element.getBoundingClientRect();
  return event.clientY < rect.top;
}

function showOverlay() {
  if (document.querySelector(".screen-darken")) {
    return;
  }
  const el_overlay = document.createElement("span");
  el_overlay.className = "screen-darken";
  document.body.appendChild(el_overlay);
}

function hideOverlay() {
  const tabPanes = document.querySelectorAll(".tab-pane");
  tabPanes.forEach((tab) => tab.classList.remove("active"));
  const overlay = document.querySelector(".screen-darken");
  if (overlay) {
    document.body.removeChild(overlay);
  }
}

document
  .querySelectorAll(".navbar .language-toggle")
  .forEach(function (languagedropdown) {
    languagedropdown.addEventListener("shown.bs.dropdown", function () {
      el_overlay = document.createElement("span");
      el_overlay.className = "screen-darken-2";
      document.body.appendChild(el_overlay);
    });

    languagedropdown.addEventListener("hide.bs.dropdown", function () {
      const overlay = document.querySelector(".screen-darken-2");
      if (overlay) {
        document.body.removeChild(overlay);
      }
    });

    languagedropdown
      .querySelector(".dropdown-menu")
      .addEventListener("click", function (event) {
        event.stopPropagation();
      });
  });

document
  .querySelectorAll(".navbar .navbar-toggler")
  .forEach(function (toggler) {
    toggler.addEventListener("click", function () {
      document.querySelector(".mega-dropdown-mobile").classList.add("show");
      document.body.classList.add("overflow-hidden");
    });
  });
document
  .querySelector(".close-mega-dropdown-mobile")
  .addEventListener("click", function () {
    document.querySelector(".mega-dropdown-mobile").classList.remove("show");
    document.body.classList.remove("overflow-hidden");
  });
document
  .querySelector(".btn-dropdown-mobile-pages-show")
  .addEventListener("click", function () {
    document.querySelector(".dropdown-mobile-pages").classList.toggle("show");
  });
document
  .querySelectorAll(".go-to-mobile-detaile")
  .forEach(function (btn, index) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      // Ẩn tất cả các phần tử mega-mobile-page-detaile
      document
        .querySelectorAll(".mega-mobile-page-detaile")
        .forEach(function (pageDetail) {
          pageDetail.classList.remove("show");
        });

      // Hiển thị phần tử mega-mobile-page-detaile tương ứng với nút được bấm
      const detailPages = document.querySelectorAll(
        ".mega-mobile-page-detaile"
      );
      if (detailPages[index]) {
        detailPages[index].classList.add("show");
      }

      // Ẩn mega-mobile-page
      document.querySelector(".mega-mobile-page").classList.remove("show");
    });
  });
document
  .querySelectorAll(".close-mega-mobile-page-detaile")
  .forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelector(".mega-mobile-page").classList.add("show");
      document
        .querySelectorAll(".mega-mobile-page-detaile")
        .forEach(function (el) {
          el.classList.remove("show");
        });
    });
  });
document
  .querySelectorAll(".more-language-dropdown-mobile")
  .forEach(function (el) {
    el.addEventListener("click", function (event) {
        let father_el = this.closest(".language-dropdown-mobile");
      father_el
        .querySelector(".language-dropdown-mobile-items")
        .classList.toggle("show");
    });
  });

