document.addEventListener('DOMContentLoaded', () => {
    let preloader = document.getElementsByClassName('preloader');
    setTimeout(function () {
        preloader[0].classList.add('done');
    }, 700);
});