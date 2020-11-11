const SliderButton = document.querySelectorAll (".button-servise-slider"); 

Object.keys(SliderButton).forEach( function(index){
 SliderButton[index].addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".button-servise-active").classList.remove("button-servise-active");
  SliderButton[index].classList.add("button-servise-active");
  document.querySelector(".servise-slide-current").classList.remove("servise-slide-current");
  const servise = document.querySelector(`.${this.dataset.too}`);
  servise.classList.add("servise-slide-current");
})
})   

const mapLink = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault()
  mapPopup.classList.add("active");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault()
  mapPopup.classList.remove("active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("active")) {
      evt.preventDefault();
      mapPopup.classList.remove("active");
    }
  }
});
const WriteUsLink = document.querySelector(".contact-button");
const WriteUsPopup = document.querySelector(".modal-write-us");
const WriteUsClose = WriteUsPopup.querySelector(".modal-close");

WriteUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  WriteUsPopup.classList.add("active");
});

WriteUsClose.addEventListener("click", function (evt) {
  evt.preventDefault()
  WriteUsPopup.classList.remove("active");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (WriteUsPopup.classList.contains("active")) {
      evt.preventDefault();
      WriteUsPopup.classList.remove("active");
    }
  }
});

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
 /*BasketLink.addEventListener("click", function (evt) {
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
}); */


const LeftButtonSlider = document.querySelector(".left_arrow");
const RightButtonSlider = document.querySelector(".right_arrow");
const SlideDrills = document.querySelector(".slide-drills");
const SlidePerforator = document.querySelector(".slide-perforator");
const LeftControl = document.querySelector(".left-control");
const RightControl = document.querySelector(".right-control");

LeftButtonSlider.addEventListener("click", function (evt) {
  evt.preventDefault();
  SlideDrills.classList.add("active");
  SlidePerforator.classList.remove("active");
  LeftButtonSlider.classList.add("disactive");
  RightButtonSlider.classList.remove("disactive");
  LeftControl.classList.add("current");
  RightControl.classList.remove("current");
});
LeftControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  SlideDrills.classList.add("active");
  SlidePerforator.classList.remove("active");
  LeftButtonSlider.classList.add("disactive");
  RightButtonSlider.classList.remove("disactive");
  LeftControl.classList.add("current");
  RightControl.classList.remove("current");
});
RightButtonSlider.addEventListener("click", function (evt) {
  evt.preventDefault();
  SlidePerforator.classList.add("active");
  SlideDrills.classList.remove("active");
  RightButtonSlider.classList.add("disactive");
  LeftButtonSlider.classList.remove("disactive");
  RightControl.classList.add("current");
  LeftControl.classList.remove("current");
});
RightControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  SlidePerforator.classList.add("active");
  SlideDrills.classList.remove("active");
  RightButtonSlider.classList.add("disactive");
  LeftButtonSlider.classList.remove("disactive");
  RightControl.classList.add("current");
  LeftControl.classList.remove("current");
});