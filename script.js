document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.querySelector('body');

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
});
