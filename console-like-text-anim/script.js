const formEntry = document.getElementsByTagName("form")[0],
  cursor = "<span>|</span>";

formEntry.addEventListener("submit", function (e) {
  e.preventDefault();
  typeIt();
});

function typeIt() {
  let counter = 0,
    typedLen = typer.value.length;
  teletype.innerHTML = cursor;
  teletype.removeAttribute("hidden");
  var i = setInterval(function () {
    teletype.innerHTML = typer.value.substr(0, counter) + cursor;
    counter++;
    if (counter === typedLen + 1) {
      formEntry.classList.toggle("hideaway");
      clearInterval(i);
    }
  }, 100);
}

typeIt();
