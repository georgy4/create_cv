var addExperience = document.querySelector('.add-work-experience');
var expInner = document.querySelector('.experience-inner');

addExperience.addEventListener('click', function(){
  var template = document.querySelector('template').content;
  var clonedElement = template.cloneNode(true);
  expInner.appendChild(clonedElement);
  var expItem = document.querySelectorAll('.experience-item');
  for (var j = 0; j < expItem.length; j++) {
    expItem[j].style = 'border-bottom: 1px solid yellow;';
  }
});