document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.querySelector('body');
    const navLinksList = document.querySelectorAll('.nav-links a');
    const hamtoggle = document.querySelector('#ha-toggle');
    const nav = document.querySelector('nav');

    body.classList.toggle('dark');
    function chnageIcon() {
        if (body.classList.contains('dark')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
    chnageIcon();

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        chnageIcon();
    });

    hamtoggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            hamtoggle.innerHTML = '<i class="fas fa-times"></i>';
            navLinksList.forEach((link) => {
                link.addEventListener('click', () => {
                    nav.classList.remove('active');
                    hamtoggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        } else {
            hamtoggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const cl = entry.target.classList;
            if (entry.isIntersecting && cl.length < 2) {
                cl.add(cl.contains('card') ? 'slide' : 'fade');
            }
        });
    });

    document.querySelectorAll('.timeline-content, .card').forEach((item) => observer.observe(item));
});
