const orderFormElement = document.querySelector('.orderForm');
const formOpeningBtn = document.querySelectorAll('.formOpeningBtn');
const crossForm = document.querySelector('.orderForm__cross');

formOpeningBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    orderFormElement.classList.add('showForm');
  })
})

crossForm.addEventListener('click', function () {
  orderFormElement.classList.remove('showForm');
})