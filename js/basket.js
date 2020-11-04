const BasketLink = document.querySelector(".button-buy");
const BasketPopup = document.querySelector(".modal-basket");
const BasketClose = BasketPopup.querySelector(".modal-close");
const BasketCloseButton = BasketPopup.querySelector (".button-close")

BasketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  BasketPopup.classList.add("show");
});

BasketClose.addEventListener("click", function (evt) {
  evt.preventDefault()
  BasketPopup.classList.remove("show");
});

BasketCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault()
  BasketPopup.classList.remove("show");
});