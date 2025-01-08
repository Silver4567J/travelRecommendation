// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    alert('¡Tu información ha sido enviada con éxito!');
    this.reset(); // Reiniciar el formulario
  });
  