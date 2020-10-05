window.addEventListener('load', () => {
    let allOnline = 20000;
    let online = document.getElementsByClassName('online')[0];
    let circleItem  = document.getElementsByClassName('circle__item')[0];
    let circleOnline  = document.getElementsByClassName('circle__online')[0];

    let onlineRequest = () => {
        fetch('https://api.vimeworld.ru/online')
            .then(res => res.json())
            .then((result) => {
                let nowOnline = result.total;
                let results = nowOnline * 100 / allOnline;
                let sum = 440 - (440 * results) / 100;
                circleItem.style.strokeDashoffset = sum;
                online.innerHTML = results.toFixed() + '%';
                circleOnline.innerHTML = nowOnline;
            });
    };

    onlineRequest();

    setInterval(() => {
        onlineRequest();
    }, 12000);
});