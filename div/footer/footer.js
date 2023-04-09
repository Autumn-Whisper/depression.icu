document.addEventListener('DOMContentLoaded', function() {
    var footerElement = document.getElementById('footer');

    fetch('depression.icu/div/footer/footer.html')
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
