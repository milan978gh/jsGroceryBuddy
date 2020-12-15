// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  // duzi oblik
  // if (value !== '' && editFlag === false) {
  // } else if (value !== '' && editFlag === true) {
  // } else {}
  // kraci oblik
  if (value && !editFlag) {

  } else if (value && editFlag) {

  } else {

  }
}
// display alert
function displayAlert() {
  alert.textContent = 'bla';
  alert.classList.add('alert-danger');
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
