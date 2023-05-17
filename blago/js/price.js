document.addEventListener('DOMContentLoaded', () => {
    let price = 0; // +localStorage.getItem('price');
    let checkValue = document.querySelectorAll('.checkbox');
    let priceText = document.querySelector('.application__amount');
    priceText.innerHTML = price;

    checkValue.forEach(el => {
        let val = Number(el.value);
        el.addEventListener('click', e => {
            if (el.checked) {
                price += val;
                localStorage.setItem('price', price);
                priceText.innerHTML = price + " р";
            } else {
                price -= val;
                localStorage.setItem('price', price);
                priceText.innerHTML = price + " р";
            }
        });
    });
});