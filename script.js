document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.querySelector('.main-image img');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      mainImage.src = thumbnail.src;
    });
  });
});
