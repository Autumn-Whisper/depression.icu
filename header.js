document.addEventListener('DOMContentLoaded', function() {
    var headerElement = document.getElementById('header');

    fetch('desktop_header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            headerElement.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching header:', error);
            headerElement.innerHTML = '<p>加载页头时出错。</p>';
        });
});
