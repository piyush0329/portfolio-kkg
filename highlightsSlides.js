// function for slideshow of highlights
let slideIndex = 1;
showSlides(slideIndex);

// beginning the slideshow on intial load
window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {plusSlides(1);}, 4000);
  
  slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
});

// Next/previous controls
function plusSlides(n) {
  clearInterval(myTimer);
  if(n<0){
    showSlides(slideIndex-=1);
  } else {
    showSlides(slideIndex+=1);
  }

  if(n===-1){
    myTimer=setInterval(function() {plusSlides(n+2)}, 2000);
  } else {
    myTimer=setInterval(function(){plusSlides(n+1)}, 2000);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

// controls to display the right slide on each selection
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// lambda to pause slide show on hover
pause = () => {
  clearInterval(myTimer);
};

// lambda to reseume slide show upon hover-release
resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {plusSlides(slideIndex);}, 2000);
};