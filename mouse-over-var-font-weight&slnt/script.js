const p = document.querySelector(".mousePos");
/////////////////////////////////////////////
// And here, we use changed the font’s axes
// dependent on the user’s mouse position on the screen.
function updateText(e) {
  multiplierWidth = e.offsetX / window.innerWidth;
  multiplierHeight = e.offsetY / window.innerHeight;

  randomSlnt = -multiplierWidth * (0 - 15) - 15;
  randomWeight = multiplierHeight * (800 - 300) + 300;
  //Change the WEIGHT and the slnt
  p.style.fontVariationSettings =
    '"wght" ' + randomWeight + ', "slnt" ' + randomSlnt;
  console.log(multiplierHeight, randomWeight);
}
window.addEventListener("mousemove", updateText);
