const menuBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.header_nav');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('active');
        navBar.classList.add('appeared');
        logo.classList.add('disappeared');
        body.classList.add('fixed_position');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('active');
        navBar.classList.remove('appeared');
        logo.classList.remove('disappeared');
        body.classList.remove('fixed_position');
        menuOpen = false;
    }
});