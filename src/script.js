/* eslint-disable quotes */
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const logo = document.querySelector(".logo");

const modal = document.querySelector(".modal");

// Get the <span> element that closes the modal
const spanClose = document.querySelector(".close");

// /////////////////navbar menu
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
  navItem.forEach((li) => li.classList.toggle("active"));
  logo.classList.toggle("hide");
  document.querySelector("header").classList.toggle("fixed");
});

navItem.forEach((n) => {
  n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
    navItem.forEach((li) => li.classList.remove("active"));
    logo.classList.remove("hide");
    document.querySelector("header").classList.remove("fixed");
  });
});

// end navbar menu

// pop-up modal ////////////////////////

// Get the button that opens the modal
window.onload = () => {
  const projectBtns = document.querySelectorAll(".see-project");
  console.log(projectBtns);

  projectBtns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });
};

spanClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// end pop-up modal ////////////////////////
