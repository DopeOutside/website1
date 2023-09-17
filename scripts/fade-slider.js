(function() {

const slides = document.querySelectorAll('.fade-slider__item');
const activeclass = "fade-slider__item--visible";    
let index = 0;

    setInterval(function() {
slides[index].classList.remove(activeclass);
index++;

if (index + 1 > slides.length) {
index = 0; 
}

slides[index].classList.add(activeclass);

    }, 1000);

}())