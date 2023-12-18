humburger=document.querySelector(".humburger");
humburger.onclick =function(){
    menubar=document.querySelector(".menu");
    menubar.classList.toggle("active");
}

const slider =document.querySelector(".slider");
const slides =document.querySelectorAll(".slide");
const prevBtn =document.querySelector(".prev");
const nextBtn =document.querySelector(".next");

let slideindex=0;
slides[slideindex].classList.add('active');

prevBtn.addEventListener('click',prevslide);
nextBtn.addEventListener('click',nextslide);
function prevslide(){
    slides[slideindex].classList.remove('active');
    slideindex = (slideindex === 0) ?slides.length-1 :slideindex-1;
    slides[slideindex].classList.add('active');
    slider.style.transform= `translateX(-${slideindex*100}%)`;

}

function nextslide(){
    slides[slideindex].classList.remove('active');
    slideindex = (slideindex === slides.length-1) ? 0:slideindex+1;
    slides[slideindex].classList.add('active');
    slider.style.transform= `translateX(-${slideindex*100}%)`;


    
}