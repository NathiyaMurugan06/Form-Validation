const form = document.getElementById("registrationForm"); // ✅ fixed ID
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword"); // ✅ fixed ID

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  checkUsername();
  checkEmail();
  checkPassword();
  checkConfirmPassword();
}

function showError(input, message) {
  const small = input.nextElementSibling;
  small.innerText = message;
  input.classList.add("error-border");
  input.classList.remove("success");
}

function showSuccess(input) {
  const small = input.nextElementSibling;
  small.innerText = "";
  input.classList.remove("error-border");
  input.classList.add("success");
}

function checkUsername() {
  const value = username.value.trim();
  if (value === "") {
    showError(username, "Username is required");
  } else if (value.length < 3) {
    showError(username, "Username must be at least 3 characters");
  } else {
    showSuccess(username);
  }
}

function checkEmail() {
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    showError(email, "Enter a valid email");
  } else {
    showSuccess(email);
  }
}

function checkPassword() {
  const value = password.value.trim();
  if (value.length < 6) {
    showError(password, "Password must be at least 6 characters");
  } else {
    showSuccess(password);
  }
}

function checkConfirmPassword() {
  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Please confirm your password");
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
  } else {
    showSuccess(confirmPassword);
  }
}
