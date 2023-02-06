window.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('nav');

    toggle.addEventListener('click', ()=> {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    })
});