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

    const content = document.querySelectorAll('.timeline-content');

    const onIntersection = (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade');
            }
        }
    };

    const observer = new IntersectionObserver(onIntersection);
    content.forEach((item) => observer.observe(item));
});
