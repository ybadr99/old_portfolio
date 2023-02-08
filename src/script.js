const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const navItem = document.querySelectorAll('.nav-item');
const logo = document.querySelector('.logo');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  navItem.forEach((li) => li.classList.toggle('active'));
  logo.classList.toggle('hide');
  document.querySelector('header').classList.toggle('fixed');
});

navItem.forEach((n) => {
  n.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    navMenu.classList.remove('active');
    navItem.forEach((li) => li.classList.remove('active'));
    logo.classList.remove('hide');
    document.querySelector('header').classList.remove('fixed');
  });
});
