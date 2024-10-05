document.addEventListener("DOMContentLoaded", function() {
  // Código para los enlaces de WhatsApp
  var isMobile = /iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
  var currentURL = window.location.href;
  var whatsappLinks = document.querySelectorAll("a#lead_whatsapp");

  whatsappLinks.forEach(function(link) {
    var message = "Hola! Me gustaría recibir más asesoría sobre esta información: " + encodeURIComponent(currentURL);
    var mobileLink = "https://wa.me/573202492786?text=" + message;
    var desktopLink = "https://web.whatsapp.com/send?phone=573202492786&text=" + message;
    
    link.setAttribute("href", isMobile ? mobileLink : desktopLink);
  });

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
  }
});
