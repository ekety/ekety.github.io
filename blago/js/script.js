// document.addEventListener("DOMContentLoaded", () => {
//
//     let menuBtns = document.querySelectorAll('.menu__btn');
//     let drops = document.querySelectorAll('.dropdown');
//
//     menuBtns.forEach(el => {
//         el.addEventListener('click', function (ev) {
//             let currentBtn = ev.currentTarget;
//             let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');
//
//             menuBtns.forEach(el => {
//                 if (el !== currentBtn) {
//                     el.classList.remove('menu__btn--active');
//                 }
//             });
//
//             drops.forEach(el => {
//                 if (el !== drop) {
//                     el.classList.remove('dropdown--active');
//                 }
//             });
//
//             drop.classList.toggle('dropdown--active');
//             currentBtn.classList.toggle('menu__btn--active');
//         });
//     });
// });
//
//
//
//
//
