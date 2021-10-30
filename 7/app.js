var x = document.getElementById("navbar-toggler");

x.addEventListener("click", burger);

function burger() {
  var element = document.getElementById("navbarSupportedContent");
  element.classList.toggle("collapse");
}

const services = document.querySelectorAll("[data-name='service']");

services.forEach(function (item) {
  item.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("dropdown-menu");
  });
});

// MODAL

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
