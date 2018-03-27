function validate(evt) { 
  evt.preventDefault();
  let results = {
    tel: tel.value,
    telValidate: false,
    firstName: firstname.value,
    lastName: lastname.value,
    firstNameValidate: false,
    lastNameValidate: false
  }

  const regTel =/^\+{1}(\d{1}[\s-]?){12}$/;

  results.telValidate = regTel.test(results.tel);

  if (results.telValidate) {
    results.tel = results.tel.replace(/[\s-]/g, "");
    results.tel = results.tel.replace(/^(\+{1}\d{3})(\d{2})(\d{2})(\d{2})(\d{3})/, '$1 $2 $3 $4 $5');
  };

  const regFirst = /^[a-zа-яё]+[\s-]?[a-zа-яё]*[\s-]?[a-zа-яё]*\s*$/i;
  const regLast = /^[a-zа-яё]+[\s-]?[a-zа-яё]*\s*$/i;

  results.firstNameValidate = regFirst.test(results.firstName);
  results.lastNameValidate = regLast.test(results.lastName);

  tel.value = "";
  firstname.value = "";
  lastname.value = "";
  
  showRes(results);

  // window.addEventListener("keypress", startTimer);
  // window.addEventListener("keypress", startExercise);
  // window.addEventListener("keydown", keyboardPressed);

  return results;
}

function showRes(results) {
  let html = htmlToShow(results.firstNameValidate, "First Name");
  html += htmlToShow(results.lastNameValidate, "Last Name");
  html += htmlToShow(results.telValidate, "Telephone");

  resultsList.innerHTML = html; 
}

function htmlToShow (value, name) {
  let html; 
  if (value) {
     html = `<li class="success">SUCCESS: ${name} passed validation</li>`;
   } else { html = `<li class="error">ERROR: ${name} failed validation</li>`} ;
   return html; 
 }

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

submitBtn.addEventListener("click", validate);