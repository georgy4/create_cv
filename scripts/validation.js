var telField = document.getElementById('tel');
var mailField = document.getElementById('email');
var salaryField = document.getElementById('salary');

var scrollPosition = {
  eMail : false,
  eMailPosition : mailField.getBoundingClientRect().top,
  phoneNumber : false,
  phoneNumberPosition : telField.getBoundingClientRect().top
}

function phonenumber() {
  var phoneno1 = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
  if(telField.value.match(phoneno1)) {
    scrollPosition.phoneNumber = true;
    return true;
  } else {
    return false;
  }
}

function email() {
  var emailAdress = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  if(mailField.value.match(emailAdress)) {
    scrollPosition.eMail = true;
    return true;
  } else {
    return false;
  }
}

salaryField.addEventListener('keypress', e => {
  // Отменяем ввод не цифр
  if(!/\d/.test(e.key)) {
    e.preventDefault();
  }
});

telField.addEventListener('focus', _ => {
  // Если там ничего нет или есть, но левое
  if(!/^\+\d*$/.test(telField.value))
    // То вставляем знак плюса как значение
    telField.value = '+7';
});

telField.addEventListener('keypress', e => {
  // Отменяем ввод не цифр
  if(!/\d/.test(e.key) || telField.value.length > 16) {
    e.preventDefault();
  }
  if(telField.value.length==2) {
    telField.value = telField.value + '(';
  }
  if(telField.value.length==6) {
    telField.value = telField.value + ')';
  }
  if(telField.value.length==10) {
    telField.value = telField.value + '-';
  }
  if(telField.value.length==13) {
    telField.value = telField.value + '-';
  }
});

var main = document.querySelector('main');

// scroll to the point of error

function pageScroll(coordsY) {
  main.scrollTo(0, coordsY); // horizontal and vertical scroll increments
}

var buttonValidate = document.querySelector('.completed-cv');

buttonValidate.addEventListener('click', function(){
  phonenumber();
  email();
  if (scrollPosition.eMail == false) {
    pageScroll(scrollPosition.eMailPosition-47);
    mailField.style.border = '1px solid red';
    setTimeout(function(){mailField.style.border = '1px solid rgb(215, 212, 216)';}, 1000);
    if (scrollPosition.phoneNumber == false) {
      telField.style.border = '1px solid red';
      setTimeout(function(){telField.style.border = '1px solid rgb(215, 212, 216)';}, 1000);    
    }
  }  
  if (scrollPosition.eMail == true && scrollPosition.phoneNumber == false) {
    pageScroll(scrollPosition.phoneNumberPosition-47);
    telField.style.border = '1px solid red';
    setTimeout(function(){telField.style.border = '1px solid rgb(215, 212, 216)';}, 1000);  
  }
});