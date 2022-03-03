
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("regist-form");
  const surnameField = document.querySelector("input[type='surname']");
  const nameField = document.querySelector("input[type='name']");
  const emailField = document.querySelector("input[type='email']");
  const passwordField = document.querySelector("input[type='password']");
console.log(form)
//   form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     console.log(form);
//     checkInputs();
//   });
function checkInputs() {
    const surnameValue = surnameField.value.trim();
    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
    const passwordValue = passwordField.value.trim();
    console.log('surnameField= ' ,surnameField)
    if (surnameValue === "") {
      //showError
      //add error class to the input
      setErrorFor(surnameField, "Заполните поле");
      return false;
    } else {
      setSuccessFor(surnameField);
    }
  }
  

  function setErrorFor(input, errorMessage) {
    const small = document.querySelector("small");

    input.classList.add("error");
    small.innerText = errorMessage;
  }

  function setSuccessFor(input) {
    const small = input.closest("div").querySelector("small");
    console.log(small);

    input.classList.add("succes");
    small.innerText = "";
  }
});
