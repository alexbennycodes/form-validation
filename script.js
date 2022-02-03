console.log("hello world");
const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("email");
const cpassword = document.getElementById("cpassword");
const epassword = document.getElementById("epassword");

const setError = (selector, message) => {
  const control = selector.parentElement;
  control.className = "inputwrapper error";
  const smallEl = control.querySelector("small");
  smallEl.innerHTML = message;
};

const setSuccess = (selector) => {
  const control = selector.parentElement;
  control.className = "inputwrapper success";
  const smallEl = control.querySelector("small");
  smallEl.innerHTML = "";
};

const isValidEmail = (emailVal) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(emailVal);
};

const validateInputs = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const cpasswordVal = cpassword.value.trim();
  const epasswordVal = epassword.value.trim();

  //Check for valid username
  if (usernameVal === "") {
    setError(username, "Username cannot be empty");
  } else {
    setSuccess(username);
  }

  //Check for valid email
  if (emailVal === "") {
    setError(email, "Email cannot be empty");
  } else if (!isValidEmail(emailVal)) {
    setError(email, "Enter a valid Email ID");
  } else {
    setSuccess(email);
  }

  //Check for valid Password
  if (epasswordVal === "") {
    setError(epassword, "Password cannot be empty");
  } else if (epasswordVal.length < 8) {
    setError(epassword, "Password must be at least 8 characters");
  } else {
    setSuccess(epassword);
  }

  //Check for valid rentry of password
  if (cpasswordVal === "") {
    setError(cpassword, "Password cannot be empty");
  } else if (cpasswordVal !== epasswordVal) {
    setError(cpassword, "Passwords do not match");
  } else {
    setSuccess(cpassword);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
