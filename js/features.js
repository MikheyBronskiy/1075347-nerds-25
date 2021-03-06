
let modalWindow = document.querySelector(".write-to-us");
document.querySelector("#write-to-us-button").addEventListener("click", function(evt){
  evt.preventDefault();
  modalWindow.classList.add("is-showed");
  modalWindow.querySelector("input").focus();
});


document.querySelector(".close-form-button").addEventListener("click", function(evt){
  event.preventDefault();
  document.querySelector(".popap.is-showed").classList.remove("is-showed");
  modalWindow.classList.remove("modal-error");
});




ymaps.ready(init);
function init(){
  

  let myMap = new ymaps.Map("map", {
      center: [59.939000, 30.321600],
      zoom: 17
  });

  myPlacemark = new ymaps.Placemark(
    [59.938750, 30.323155]
    , {
      hintContent: "Б.Конюшенная, д. 19/8",
      balloonContent: "Б.Конюшенная, д. 19/8"
    }
    , {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [260, 200],
      iconImageOffset: [-55, -200]
    }
  );
  myMap.geoObjects.add(myPlacemark);
};

let templateItems = document.querySelectorAll(".templates-item");
document.addEventListener("focusin", onFocusTemplate);
document.addEventListener("focusout",onFocusoutTemplate);


function onFocusTemplate(evt){
  for (let i = 0; i < templateItems.length; i++) {
    if (templateItems[i].querySelector("a:focus"))
    {
      if (templateItems[i].querySelector("hover-showed")) {
        return;
      }
      else {
        let forClear = this.querySelector(".templates-item-hover.hover-showed");
        if (forClear) {
          forClear.classList.remove("hover-showed");
        }
        templateItems[i].querySelector(".templates-item-hover").classList.add("hover-showed");
        return;
      }
    }
  }
  let forClear = this.querySelector(".templates-item-hover.hover-showed");
  if (forClear) {
    forClear.classList.remove("hover-showed");
  }
};
function onFocusoutTemplate(){
  setTimeout(delayFocusoutHandler,100);
};

function delayFocusoutHandler(){
  if (document.querySelector(".templates-item a:focus")) return;
  let forClear = document.querySelector(".templates-item-hover.hover-showed");
  if (forClear) {
    forClear.classList.remove("hover-showed");
  }
};

let slides = document.querySelectorAll(".slides-list-item");
let slideButtons = document.querySelectorAll(".slides-switch-button");
let slideLinks = document.querySelectorAll(".slides-list-item .button");
function sliderSwitchClickHandler(num){
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("is-showed");
    slides[i].classList.add("visually-hidden");
  }
  for (let i = 0; i < slideButtons.length; i++) {
    slideButtons[i].classList.remove("active-button");
  }
  for (let i = 0; i < slideLinks.length; i++) {
    slideLinks[i].setAttribute("tabindex","-1");
  }
  slides[num].classList.remove("visually-hidden");
  slides[num].classList.add("is-showed");
  slideButtons[num].classList.add("active-button");
  slideLinks[num].setAttribute("tabindex","0");
};

let formFields = modalWindow.querySelectorAll(".form-field");

modalWindow.querySelector("[type='submit']").addEventListener("click", function(evt){
  let res = true;
  modalWindow.classList.remove("modal-error");
  modalWindow.offsetWidth = modalWindow.offsetWidth;
  for (let i = 0; i < formFields.length; i++) {
    res = res && formFields[i].value && formFields[i].checkValidity();
  }
  if (!res) {
    evt.preventDefault();
    modalWindow.classList.add("modal-error");
  }
});

