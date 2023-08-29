const modal = document.querySelector('.modal')
window.addEventListener('scroll', function () {
	const height = document.documentElement.scrollTop
  if (height > 1200) {
  	modal.classList.add('showModal')
  } else {
    modal.classList.remove('showModal')
  }
}, { once: true })

const crossModal = document.querySelector('.modal');
crossModal.addEventListener('click', function () {
  modal.classList.remove('showModal');
})