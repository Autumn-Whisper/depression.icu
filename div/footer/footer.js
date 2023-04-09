document.addEventListener('DOMContentLoaded', function() {
    var headerElement = document.getElementById('footer');

    fetch('./div/footer/footer.html')
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
            console.error('Error fetching footer:', error);
            headerElement.innerHTML = '<p>加载页脚时出错。</p>';
        });
});
