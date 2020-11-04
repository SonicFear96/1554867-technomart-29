const button = document.querySelectorAll (".button-servise-slider"); 

Object.keys(button).forEach( function(index){
 button[index].addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".button-servise-active").classList.remove("button-servise-active");
  button[index].classList.add("button-servise-active");
  document.querySelector(".servise-slide-current").classList.remove("servise-slide-current");
  const servise = document.querySelector(`.${this.dataset.too}`);
  servise.classList.add("servise-slide-current");
})
})   



