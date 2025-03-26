var clip = document.getElementById("clip");
var isUp = 1;
var offsets = document.getElementById("clip").getBoundingClientRect();

clip.onclick = function () {
  if (isUp < 1) moveUp();
  else moveDown();
};

function moveUp(n) {
  clip.style.top = 2 + "px";
  isUp = 1;
}
function moveDown(n) {
  clip.style.top = 32 + "px";
  isUp = 0;
}

//////////    LOGO TEST    //////////
/*
var button = document.getElementById("button");
var isUp = 1;
var MoveNum = 5;
var offsets = document.getElementById('button').getBoundingClientRect();

button.onclick = function() {
  if (isUp <0)
    moveDown(MoveNum);
  else
    moveUp(MoveNum);
}


function moveUp(n) {
  button.style.top = 20 + 'px';
  isUp = 1;
}
function moveDown(n) {
  button.style.top = 30 + 'px';
  isUp = -1;
}
*/

/*
//var MoveNum = 10;

function moveUp(n) {
  logo.style.top = offsets.top - n + 'px';
  isUp = 1;
}
function moveDown(n) {
  logo.style.top = offsets.top + n + 'px';
  isUp = -1;
}*/
