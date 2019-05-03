'use strict'

var loginButton = document.querySelector('.login');
var buttons = document.querySelectorAll('.button');
var loginPage = document.querySelector('.login-page');
var signInButton = document.querySelector('.sign-in');

// Change innerHtml
function changeOpacity(element, innerOfElement){
  element.style.opacity=0;
  setTimeout(function(){
    element.innerHTML = innerOfElement;
    element.style.opacity=1;
  }, 500);
};



// to logIn
loginButton.addEventListener('click', function(){

  var loginPasswordTemplate = '<div class="login-page"><div class="login-area">  <input class="input email-input" type="email" name="email" placeholder="mail@mail.ru" id="email">  <label for="email">Адрес электронной почты</label><br>  <input class="input password-input" type="password" name="password" placeholder="******" id="password">  <label for="password">Пароль</label>  <button class="button button-log-in" type="submit">Войти</button></div></div>';

  changeOpacity(loginPage, loginPasswordTemplate);

  // Check the value and go to the next page
  setTimeout(function(){
    document.querySelector('.button-log-in').addEventListener('click', function(){
      window.open("step3.html", "_self");
    });
    // document.querySelector('.button-log-in').addEventListener('click', function(){  
    //   if(document.querySelector('.email-input').value == names[0].email && document.querySelector('.password-input').value == names[0].password) {
    //     window.open("index.html", "_self");
    //   } else {
    //     alert('Неверный логин или пароль');
    //   }
    // });
  }, 500);

});

// To signIn
signInButton.addEventListener('click', function(){

  var signInTemplate = '<div class="login-area">  <input class="input input-name" type="text" name="name" id="name" placeholder="Иван">  <label for="name">Имя</label><br>  <input class="input" type="text" name="second_name" id="second_name" placeholder="Иванов">  <label for="second_name">Фамилия</label><br>  <input class="input" type="email" name="email" id="email" placeholder="mail@mail.ru">  <label for="email">Адрес электронной почты</label><br>  <input class="input" type="password" name="password" id="password" placeholder="*******">  <label for="pasword">Придумайте пароль</label><br>  <input class="input" type="text" name="city" id="city" placeholder="Санкт-Петербург">  <label for="city">Город</label>  <button class="button button-sign-in" type="submit">Зарегистрироваться</button></div>';

  changeOpacity(loginPage, signInTemplate);

  // Check the value and go to the next page
  setTimeout(function(){
    document.querySelector('.button-sign-in').addEventListener('click', function(){
      window.open("step3.html", "_self");
    });
  }, 500);

});

