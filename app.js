const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    menu.classList.toggle('s-nav-active');
    document.body.classList.toggle('s-body-active');
});