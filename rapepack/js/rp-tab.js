window.addEventListener('DOMContentLoaded', () => {
    const rpTabs = (dotsSelector, dotsContentSelector, contentSelector, classActive) => {
        const dots = document.querySelector(dotsSelector);
        const dotsContent = document.querySelectorAll(dotsContentSelector);
        const content = document.querySelectorAll(contentSelector);

        function showTabs(i = 0) {
            content[i].style.display = 'flex';
            dotsContent[i].classList.add('dots__item_active');
        }

        function hideTabs(e) {
            content.forEach(item => {
                item.style.display = 'none';
            });

            dotsContent.forEach(item => {
                item.classList.remove('dots__item_active');
            });
        }

        hideTabs();
        showTabs();

        dots.addEventListener('click', (e) => {
            const target = e.target;
            console.log(target);
            if (target &&
                target.classList.contains(dotsContentSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(dotsContentSelector.replace(/\./, ''))
            ) {
                dotsContent.forEach((item, index) => {
                    if (target === item || target.parentNode === item) {
                        hideTabs();
                        showTabs(index);
                    }
                });
            }
        });
    };

    rpTabs('.dots',
        '.dots__item',
        '.packs__content',);
});
