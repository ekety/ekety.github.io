function init() {
    let btn = document.getElementById('btn');
    event.preventDefault();
    btn.onclick = getValue;
}

function getValue() {
    let log = document.getElementById('log');
    let password = document.getElementById('pass');
   
    let mass = {
        name: log.value,
        pass: password.value, 
    }
    
    alert('Логин : ' + mass.name + '\n' + 'Пароль : ' + mass.pass);
}

window.onload = init;