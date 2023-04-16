document.addEventListener('DOMContentLoaded', function () {
  var headerElement = document.getElementById('header');

  fetch('div/header/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(html => {
      headerElement.innerHTML = html;
      setupMenuToggle();
    })
    .catch(error => {
      console.error('Error fetching header:', error);
      headerElement.innerHTML = '<p>加载页头时出错。</p>';
    });
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
