import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
 userForm = {
  email: email.value,
  message: message.value,
}

  localStorage.setItem('feedback-form-state', JSON.stringify(userForm));
}

function saveUserLocal(e) {
  const saveUser = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveUser) {
    message.value = saveUser.message ;
    email.value = saveUser.email ;
  }
}

function onFormSubmit(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  form.reset();

  localStorage.removeItem('feedback-form-state');
}

saveUserLocal();
