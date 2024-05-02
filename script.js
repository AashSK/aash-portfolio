document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.querySelector('body');
    const navLinksList = document.querySelectorAll('.nav-links a');
    const hatoggle = document.querySelector('#ha-toggle');
    const nav = document.querySelector('nav');

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    hatoggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            hatoggle.innerHTML = '<i class="fas fa-times"></i>';
            navLinksList.forEach((link) => {
                link.addEventListener('click', () => {
                    nav.classList.remove('active');
                    hatoggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        } else {
            hatoggle.innerHTML = '<i class="fas fa-bars"></i>';
        }

    });
});
