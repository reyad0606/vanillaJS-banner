var button = document.querySelector('button');
var lorem = document.getElementById('lorem');
var isColored = false;

button.addEventListener('click', function () {
  if (isColored) {
    document.body.style.background = 'whitesmoke';
    lorem.style.color = 'black';

    isColored = false;
  } else {
    document.body.style.background = '#222222';
    lorem.style.color = '#FFFFFF';
    isColored = true;
  }
});
