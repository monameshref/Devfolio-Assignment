"use strict"

const closeIcon = document.getElementById("close");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const boxModal = document.getElementById("box-modal");
const modal = document.getElementById("modal");


const imges = Array.from( document.querySelectorAll(".box img")); //image
const iconsImg = Array.from( document.querySelectorAll(".box .iconModal")); //div






let curentIndex = 0;



for (let i = 0; i < iconsImg.length; i++) {

    iconsImg[i].addEventListener("click",function(){
      // const currentSrc = images[i].getAttribute("src"); // images/p-1.jpg
    
        const clickedImage = imges[i];
        const imageUrl = clickedImage.getAttribute("src"); // imges/p-1.jpg
    
        curentIndex = imges.indexOf(clickedImage);
    
        modal.classList.remove("d-none");
    
        boxModal.style.backgroundImage = `url(${imageUrl})`;
        })
    }


function closeModal() {
    modal.classList.add("d-none");
}
closeIcon.addEventListener("click" , closeModal)


function nextSlide() {
    curentIndex++;

    if( curentIndex == imges.length ) {
        curentIndex = 0;
    }

    boxModal.style.backgroundImage = `url( ${imges[curentIndex].src} )`;
}
next.addEventListener("click" , nextSlide);


function prevSlide() {
    curentIndex--;

    if( curentIndex < 0 ) {
        curentIndex = imges.length - 1;
    }

    boxModal.style.backgroundImage = `url( ${imges[curentIndex].src} )`;
}
prev.addEventListener("click" , prevSlide);



document.addEventListener("keydown" , function(e){
    if( e.key == "Escape" ) {
        closeModal();
    }

    if( e.key == "ArrowRight" ) {
        nextSlide();
    }

    if( e.key == "ArrowLeft" ) {
        prevSlide();
    }
})



modal.addEventListener("click",function(e){
    if (e.target === modal) {
        closeModal();
    }
})

















                // animation pragragh
                var typed = new Typed(".type",{
                    strings : ["Designer" ,"Developer","Freelancer","Photographer"],
                    typeSpeed : 80,
                    backSpeed : 80,
                    smartBackspace : true,
                    showCursor :true,
                    autoInserCss : true,
                    looped : true,
                    loop : true,
                });

                const x = document.getElementById('navbar-example');

                // navbar
                function changeBg(){
                    let scrollValue = window.scrollY;
                    let navbar = x;
                    if(scrollValue < 150){
                        navbar.classList.remove('bgColor');
                    } else{
                        navbar.classList.add('bgColor');
                    }
                };

                window.addEventListener('scroll', changeBg);

                // Up to
                let arrow = document.querySelector(".arrow");

                window.onscroll = function() {
                    if (this.scrollY >= 400) {
                        arrow.classList.add("show");
                    } else {
                        arrow.classList.remove("show");
                    };
                };



                // Section Numbers

                const nums = document.querySelectorAll(".numberData");
                const section = document.querySelector(".numbers");
                let started =false;

                function startCount(el){
                    let goal = el.dataset.goal;
                    let count = setInterval(() =>{
                        el.textContent++;
                        if (el.textContent === goal) {
                            clearInterval(count);
                        }
                    },2000 / goal)
                }

                window.onscroll = function(){
                    if (window.scrollY >= section.offsetTop) {
                        if (!started) {
                            nums.forEach((num) => startCount(num));
                        }
                        started = true;
                    }
                }

