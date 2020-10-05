window.addEventListener('DOMContentLoaded', () => {
    let imgModal = (targetSelector, modalSelector, modaImglSelector, closeSelector) => {
        let target = document.querySelectorAll(targetSelector);
        let modal = document.querySelector(modalSelector);
        let modalImg = document.querySelector(modaImglSelector);
        let close = document.querySelector(closeSelector);

        target.forEach(item => {
            item.addEventListener('click', (e) => {
                let src = e.target.src;
                modalImg.src = src;
                modal.classList.add('modal-active');
            });
        });

        close.addEventListener('click', () => {
            modal.classList.remove('modal-active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal-active');
            }
        });

    };

    imgModal('.pack__images',
        '.pack-modal',
        '.pack-modal__img',
        '.pack-modal__close'
    );
});