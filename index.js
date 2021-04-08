
function addingEventListener() {
  const input = document.querySelector('#input');
  input.addEventListener('click', function() {
    alert('I was clicked!');
  }); 
}
addingEventListener()
/*
input.addEventListener('click', function) {
  alert('I was clicked!');
});
 


let div5 = document.querySelectorAll('div')[5];

function clickAlert() {
  alert("I was clicked!");
}


div5.addEventListener('click', clickAlert);
*/
//input.addEventListener('click', addingEventListener);