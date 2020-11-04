const WriteUsLink = document.querySelector(".contact-button");
const WriteUsPopup = document.querySelector(".modal-write-us");
const WriteUsClose = WriteUsPopup.querySelector(".modal-close");

WriteUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  WriteUsPopup.classList.add("show");
});

WriteUsClose.addEventListener("click", function (evt) {
  evt.preventDefault()
  WriteUsPopup.classList.remove("show");
});
