var telField = document.getElementById('tel');
var mailField = document.getElementById('email');
var salaryField = document.getElementById('salary');

function phonenumber() {
  var phoneno1 = /^[+]{1}[0-9]{11}$/;
  if(telField.value.match(phoneno1)) {
    return true;
  } else {
    alert("number");
    return false;
  }
}

function email() {
  var emailAdress = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  if(mailField.value.match(emailAdress)) {
    return true;
  } else {
    alert("mail");
    return false;
  }
}

salaryField.addEventListener('keypress', e => {
  // Отменяем ввод не цифр
  if(!/\d/.test(e.key))
    e.preventDefault();
});

telField.addEventListener('focus', _ => {
  // Если там ничего нет или есть, но левое
  if(!/^\+\d*$/.test(telField.value))
    // То вставляем знак плюса как значение
    telField.value = '+';
});

telField.addEventListener('keypress', e => {
  // Отменяем ввод не цифр
  if(!/\d/.test(e.key) || telField.value.length > 12)
    e.preventDefault();
});

var buttonValidate = document.querySelector('.completed-cv');

buttonValidate.addEventListener('click', function(){
  phonenumber();
  email();
});