const viewImagesButton = document.getElementById('viewImagesButton');
const gallery = document.getElementById('gallery');
const welcomeMessage = document.getElementById('welcomeMessage');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

viewImagesButton.addEventListener('click', () => {
    viewImagesButton.style.display = 'none';
    welcomeMessage.style.display = 'block';
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
        gallery.style.display = 'flex';
    }, 2000);
});

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    lightboxImg.src = images[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = images[currentIndex].src;
});

window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
