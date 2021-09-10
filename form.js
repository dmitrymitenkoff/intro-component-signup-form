const form = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// Show input error message
function showError(input, message) {
  const fieldControl = input.parentElement;
  fieldControl.className = 'field-control error';
  const small = fieldControl.querySelector('small');
  small.textContent = message;
  fieldControl.querySelector('.icon-error').style.visibility = 'visible';
  fieldControl.style.marginBottom = '4.2rem';
}

// Show success outline
function showSuccess(input) {
  const fieldControl = input.parentElement;
  fieldControl.className = 'field-control success';
  fieldControl.querySelector('.icon-error').style.visibility = 'hidden';
}

// Check if email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// EVENT LISTERNER

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(firstName.value);

  if (firstName.value === '') {
    showError(firstName, 'First Name cannot be empty');
  } else {
    showSuccess(firstName);
  }

  if (lastName.value === '') {
    showError(lastName, 'Last Name cannot be empty');
  } else {
    showSuccess(lastName);
  }

  if (email.value === '') {
    showError(email, 'Email cannot be empty');
  } else if (!isValidEmail(email.value)) {
    email.style.color = 'red';
    showError(email, 'Looks like this is not an email');
  } else {
    showSuccess(email);
    email.style.color = '#3e3c48';
  }

  if (password.value === '') {
    showError(password, 'Password cannot be empty');
  } else if (password.value.length < 8) {
    showError(password, 'Password is too short');
  } else {
    showSuccess(password);
  }
});
