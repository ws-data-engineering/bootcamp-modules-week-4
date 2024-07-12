const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  const formSubmission = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    userEmail: emailInput.value,
    password: passwordInput.value
  };

  // TODO: Set new submission to local storage
  localStorage.setItem('user', JSON.stringify(formSubmission)); 
});
