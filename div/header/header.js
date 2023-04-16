document.addEventListener('DOMContentLoaded', function () {
    setupMenuToggle();
  });
  
  function setupMenuToggle() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
      }
    });
  }
  