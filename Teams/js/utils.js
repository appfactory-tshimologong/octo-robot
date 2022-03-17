
function showSlides() {



  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let currentSlide = 0; currentSlide < slides.length; currentSlide++) {
    slides[currentSlide].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let currentSlide = 0; currentSlide < dots.length; currentSlide++) {
    dots[currentSlide].className = dots[currentSlide].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds



}