console.log('hello');

setInterval(function(){
  var input = document.querySelectorAll('.fit-content');
  for (let i = 0; i < input.length; i++) (function(i){
    input[i].addEventListener('keydown', function(){  
    input[i].size = ( input[i].value.length > 10 && input[i].value.length < 50) ? input[i].value.length : auto;    
    });
  })(i);
}, 2000)


