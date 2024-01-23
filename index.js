



function navslide() {
    let burger = document.querySelector(".burger")
    let navlinks = document.querySelector(".navlinks")

    burger.addEventListener("click", () => {
        burger.classList.toggle("active")
        navlinks.classList.toggle("active")
    })
}
navslide()





function faqs() {
    let faqs = document.querySelectorAll('.faq1')

    faqs.forEach(faq1 => {
        faq1.addEventListener("click", () => {
            faq1.classList.toggle("active");
        })
    })
}
faqs()





function bar(){
const rangeInput = document.getElementById('myRange');
const circle = document.querySelector('.circle');
const percentageText = document.querySelector('.percentage');

rangeInput.addEventListener('input', function () {
    const value = this.value;
    const percent = `${value}%`;

    percentageText.textContent = percent;

    circle.style.setProperty('--angle', `calc(${value} * 3.6deg)`);
});

}
bar()






let slideIndex = 0;


function showSlides() {
   
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}
showSlides();



