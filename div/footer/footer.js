document.addEventListener('DOMContentLoaded', function() {
    var footerElement = document.getElementById('footer');

    var path = (window.location.pathname.includes("/page/")) ? "../div/footer/footer.html" : "div/footer/footer.html";

    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            footerElement.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
            footerElement.innerHTML = '<p>加载页脚时出错。</p>';
        });
});
