var link = document.querySelector(".show-map");

var popup = document.querySelector(".search");

link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle("search-remove"); 
});