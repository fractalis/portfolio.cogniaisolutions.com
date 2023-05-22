window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallaxImage = document.querySelector('.parallax-image');
    parallaxImage.style.transform = `translateY(${scrolled * 0.4}px)`;
  });