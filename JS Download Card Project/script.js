var button = document.querySelector(".downloadButton");
var filler = document.querySelector(".loaderFill");
var number = document.querySelector(".percentageFill");
var grow = 0;

button.addEventListener("click", () => {
  button.style.pointerEvents = "none";
  button.style.opacity = 0.5;
  var interval = setInterval(() => {
    grow++;
    number.innerHTML = grow + "%";
    filler.style.width = grow + "%";
    console.log("clicked");
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    button.innerHTML = "Download Complete";
    button.style.opacity = 1.0;
  }, 5000);
});
