const orderFormElement = document.querySelector('.orderForm');
const openingFormBtn = document.querySelectorAll('.formOpeningBtn');
const crossForm = document.querySelector('.orderForm__cross');
const darkBackground = document.querySelector('.dark-background');
const openingBackground = document.querySelector('.showDarkBackground');

openingFormBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    orderFormElement.classList.add('showForm');
    darkBackground.classList.add('showDarkBackground');
  })
})

crossForm.addEventListener('click', function () {
  orderFormElement.classList.remove('showForm');
  darkBackground.classList.remove('showDarkBackground');
})