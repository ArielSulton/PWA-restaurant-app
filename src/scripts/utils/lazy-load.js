class LazyLoader {
  static init() {
    const lazyImages = document.querySelectorAll('.restaurant-image[data-src]');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      lazyImages.forEach((img) => observer.observe(img));
    } else {
      lazyImages.forEach((img) => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
  }
}

export default LazyLoader;