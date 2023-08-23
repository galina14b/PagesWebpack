const hamburger = document.querySelector('.hamburger');
const menuNav = document.querySelector('.header__nav');
 
let menuHandler = hamburger.addEventListener('click', function (e) {
  this.classList.toggle("is-active");
  menuNav.classList.toggle("is-closed");
});


