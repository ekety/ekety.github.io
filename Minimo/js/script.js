window.onload = init;

function init() {
	let el = document.querySelector('.show__more-btn');
	el.onclick = function () {
		let btn = document.querySelector('.show__more-btn');
		let disabled = document.querySelector('.disabled');
		disabled.style.display = 'block';
		btn.style.display = 'none';
	};
}

function Menu(e) {
	let el = document.getElementById('hamburger');
	el.onclick = showMenu;
}

function showMenu() {
	let el = document.querySelector('.nav__active');
	
	if (el.style.left == '-2200px') {
			el.style.left = '0px';
			el.style.transition = '0.5s';
		} else {
			el.style.left = '-2200px';
			el.style.transition = '1s';
		}
}

Menu();




