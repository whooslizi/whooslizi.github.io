const images = [
    '../src/image1.JPG', '../src/image2.JPG', '../src/image3.jpg', '../src/image4.jpg', '../src/image5.jpg',
    '../src/image6.jpg', '../src/image7.jpg', '../src/image8.jpg', '../src/image9.jpg', '../src/image10.jpg', '../src/image11.jpg'
];
let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const introSequence = document.getElementById('intro-sequence');
const introImg = document.getElementById('intro-img');
const galleryContainer = document.querySelector('.gallery-container');

function playIntro() {
    document.body.style.overflow = 'hidden';
    introSequence.style.display = 'flex';
    introSequence.style.opacity = '1';
    galleryContainer.classList.remove('reveal');
    window.scrollTo(0, 0);

    let flashIndex = 0;
    const flashImages = images.slice(0, 6);
    
    const flashInterval = setInterval(() => {
        if (flashIndex < flashImages.length) {
            introImg.src = flashImages[flashIndex];
            flashIndex++;
        } else {
            clearInterval(flashInterval);
            introSequence.style.opacity = '0';
            setTimeout(() => {
                introSequence.style.display = 'none';
                galleryContainer.classList.add('reveal');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }, 120);
}

window.onload = playIntro;

document.querySelectorAll('.photo-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
    });
});

function showLightbox() {
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navLightbox(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex];
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
    if (e.key === 'ArrowRight' && lightbox.style.display === 'flex') {
        navLightbox(1);
    }
    if (e.key === 'ArrowLeft' && lightbox.style.display === 'flex') {
        navLightbox(-1);
    }
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('viewfinder-ui')) {
        closeLightbox();
    }
});
