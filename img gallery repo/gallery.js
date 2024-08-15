let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img, .thumbnails img');
const currentImage = document.querySelector('.current-image');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    updateCurrentImage();
  });
});

document.getElementById('prev').addEventListener('click', () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateCurrentImage();
});

document.getElementById('next').addEventListener('click', () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateCurrentImage();
});

function updateCurrentImage() {
  currentImage.src = images[currentImageIndex].src;
}


