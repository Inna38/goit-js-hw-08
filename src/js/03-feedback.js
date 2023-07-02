import throttle from 'lodash.throttle';

const form = document.querySelector('form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let userForm = {};

function onFormInput(e) {
  let { email, message } = e.currentTarget.elements;

  userForm = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(userForm));

  const saveUser = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveUser) {
     console.log('saveUser', saveUser.email);
     console.log('email.value', email.value);

    email.value = saveUser.email;
    message.value = saveUser.message;
  }

  //  saveUserLocal(userForm);
}

// function saveUserLocal(userForm) {

// //     const saveUser = JSON.parse(localStorage.getItem('feedback-form-state'));
// //   if (saveUser) {
// //      console.log("saveUser",saveUser.email);

// //  console.log("email.value", email.value);
// //   userForm.email = saveUser.email;
// //  message.value = saveUser.message;
// //   }

// }

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(userForm);
}
