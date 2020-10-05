let preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    setTimeout((e) => {
       if (!preloader.classList.contains('done')) {
           preloader.classList.add('done');
       }
    }, 800);
});
