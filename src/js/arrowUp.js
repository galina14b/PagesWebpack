const arrowUp = document.querySelector('.arrowUp');

window.addEventListener('scroll', function () {
  const height = document.documentElement.scrollTop
  if (height > 900) {
    arrowUp.classList.add('showArrow')
  } else {
    arrowUp.classList.remove('showArrow')
  }
});

arrowUp.addEventListener('click', function () {
  const headerElement = document.querySelector('.header');
  headerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
})
