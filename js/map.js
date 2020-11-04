const mapLink = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault()
  mapPopup.classList.add("show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault()
  mapPopup.classList.remove("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("show")) {
      evt.preventDefault();
      mapPopup.classList.remove("show");
    }
  }
});