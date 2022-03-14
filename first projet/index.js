
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const mainContent = document.querySelector('.main-content');
const leftButton = document.querySelector(".fa-angle-left");
const rightButton = document.querySelector(".fa-angle-right");
const image = document.querySelector ('.appear');
const slide = document.getElementById('moving');


function toggleMenu () {  
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
      mainContent.classList.toggle('bodyHidden');
      
    });    
  }
  toggleMenu();

rightButton.addEventListener("click", () => {
    document.querySelector('.catalog_images1').scrollLeft += 300;
  });
    
leftButton.addEventListener ("click", () => {
    document.querySelector('.catalog_images1').scrollLeft -= 300;
});

  