humburger = document.querySelector(".humburger");
humburger.onclick = function () {
    menubar = document.querySelector(".menu");
    menubar.classList.toggle("active");
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideindex = 0;
slides[slideindex].classList.add('active');

prevBtn.addEventListener('click', prevslide);
nextBtn.addEventListener('click', nextslide);
function prevslide() {
    slides[slideindex].classList.remove('active');
    slideindex = (slideindex === 0) ? slides.length - 1 : slideindex - 1;
    slides[slideindex].classList.add('active');
    slider.style.transform = `translateX(-${slideindex * 100}%)`;

}

function nextslide() {
    slides[slideindex].classList.remove('active');
    slideindex = (slideindex === slides.length - 1) ? 0 : slideindex + 1;
    slides[slideindex].classList.add('active');
    slider.style.transform = `translateX(-${slideindex * 100}%)`;



}


let shoesDatabase = [];

function show(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const shoe = {name,email,number };
    shoesDatabase.push(shoe);

    alert('Shoe added successfully!');
}

function land(){
        const showfile = document.getElementById('showfile');
        showfile.innerHTML = '<h2>Shoes in the Database</h2>';
    
        if (shoesDatabase.length === 0) {
            showfile.innerHTML += '<p>No shoes in the database.</p>';
        } else {
            shoesDatabase.forEach((shoe, index) => {
                showfile.innerHTML += `
                    <p>
                        ${index + 1}. 
                        name: ${shoe.name}, 
                        email: ${shoe.email}, 
                        number: ${shoe.number}, 
                    
                    </p>`;
            });
        }
    }
    