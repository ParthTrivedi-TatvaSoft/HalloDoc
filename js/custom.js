
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var img = element.querySelector(".light")
   img.src.includes("dark") ? img.src = "images/light.png" : img.src = "images/dark.png";
}

