document.addEventListener('DOMContentLoaded', function() {

    var currentUrl = window.location.pathname;

    var links = document.querySelectorAll('.navigation-bar li a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
});