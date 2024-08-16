let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1 ;}
  if (n < 1) {slideIndex = slides.length ;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

// window.onload = function() {
//   showSlides(slideIndex);
// }

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  });


// let slideIndex = 0;

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slider-item");
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   slideIndex++;
  
//   if (slideIndex > slides.length) { slideIndex = 1; } 
//   slides[slideIndex - 1].style.display = "block";  
//   setTimeout(showSlides, 2000);  


// document.addEventListener("DOMContentLoaded", () => {
//   showSlides();
// });
// }

// Typing animation
var Typed = new Typed(".main itnro",{
  strings:["","Shop your Favourites right-here on tw Stores","Best Prices"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
  
  
});

function increase(event) {
  const button = event.target;
  const cardBody = button.closest(".item1");
  const quantityItem = cardBody.querySelector("input[type='number']");  let quantity = parseInt(quantityItem.value, 10);
  quantity += 1;
  quantityItem.value = quantity;
}

const addbuttons = document.getElementsByClassName("fa fa-plus");
for (let i = 0; i < addbuttons.length; i++) {
  addbuttons[i].addEventListener("click", increase);
}