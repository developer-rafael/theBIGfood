let password = document.getElementById('password');
let showEye = document.getElementById('showEye');
let hideEye = document.getElementById('hideEye');

function black(){
  showEye.style.fill = "#000000";
  hideEye.style.fill = "#000000";
}
function white(){
  showEye.style.fill = "#fff";
  hideEye.style.fill = "#fff";
}

function passwordShow(){
  password.type = 'text';
  showEye.style.display= "none";
  hideEye.style.display= "inline";
  password.focus();
}
function passwordHide(){
  password.type = 'password';
  showEye.style.display= "inline";
  hideEye.style.display= "none";
  password.focus();
}