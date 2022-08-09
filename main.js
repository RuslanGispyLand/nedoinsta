const texts = document.querySelectorAll('.text-description');
const users = document.querySelectorAll('.videoFooter__text');

texts.forEach(textBlock => {
  const onTextClick = (evt) => {
    if (evt.target.closest('.text--hidden') !== null) {
      textBlock.classList.add('text--visible');
      textBlock.classList.remove('text--hidden');
      users[textBlock.id - 1].style.marginBottom = '42vh';
    } else {
      textBlock.scrollTo(0, 0);
      textBlock.classList.add('text--hidden');
      textBlock.classList.remove('text--visible');
      users[textBlock.id - 1].style.marginBottom = '5vh';
    }
  }
  textBlock.addEventListener('click', onTextClick);
})

const form = document.querySelector('.form_section');
const inputs = document.querySelectorAll('input');
const productImage = document.querySelector('.img_wrapper');
const orderForm = document.querySelector('.order_form');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    productImage.classList.add('visually-hidden');
    form.classList.add('form_section--focus');
    orderForm.classList.add('order_form--active')
  })
  input.addEventListener('blur', () => {
    productImage.classList.remove('visually-hidden');
    form.classList.remove('form_section--focus');
    orderForm.classList.remove('order_form--active');
  })
})

