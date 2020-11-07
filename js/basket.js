const BasketLink = document.querySelectorAll(".button-buy");
const BasketPopup = document.querySelector(".modal-basket");
const BasketClose = BasketPopup.querySelector(".modal-close");
const BasketCloseButton = BasketPopup.querySelector (".button-close");
const BasketPanel = document.querySelector(".panel_basket");

Object.keys(BasketLink).forEach( function(index){ 
 BasketLink[index].addEventListener("click", function (evt) { 
 evt.preventDefault();
 BasketPopup.classList.add("active");
 BasketPanel.classList.add("basket_filled");
 })
})
BasketClose.addEventListener("click", function (evt) {
  evt.preventDefault()
  BasketPopup.classList.remove("active");
 });
BasketCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault()
  BasketPopup.classList.remove("active");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (BasketPopup.classList.contains("active")) {
      evt.preventDefault();
      BasketPopup.classList.remove("active");
    }
  }
})