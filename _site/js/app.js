  // Código para animar líneas
  const lines = document.querySelectorAll('.animated-line');
  
  function checkLines() {
    lines.forEach(line => {
      const rect = line.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      line.classList.toggle('visible', isVisible);
    });
  }

  window.addEventListener('scroll', checkLines);
  checkLines(); // Comprueba la visibilidad inicial

  // Código para la flecha de desplazamiento (si es necesario)
  const scrollArrow = document.querySelector('.scroll-arrow');
  if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  };
