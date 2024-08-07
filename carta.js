document.addEventListener('DOMContentLoaded', function() {
  var dateElement = document.getElementById('date');
  
  // Insertar la fecha actual
  var today = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = today.toLocaleDateString('es-ES', options);
});
