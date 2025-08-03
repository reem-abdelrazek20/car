const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


  const images = [
    "/img/home.jpg",
    "/img/home2.jpg",
    "/img/home3.jpg",
   
  ];

  let currentIndex = 0;
  const imageElement = document.getElementById("car");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }, 5000);



