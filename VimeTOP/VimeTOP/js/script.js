let el = document.getElementsByClassName('menu-item');

for (let i = 0; i < el.length; i++) {
	el[i].addEventListener('mouseenter', showSub, false);

	el[i].addEventListener('mouseleave', hideSub, false);
}

function showSub() {
	if (this.children.length > 1) {
		this.children[1].style.height = 'auto';
		this.children[1].style.opacity = '1';
		this.children[1].style.overflow = 'visible';
	} else {
		return false;
	}
}

function hideSub() {
	if (this.children.length > 1) {
		this.children[1].style.height = '0';
		this.children[1].style.opacity = '0';
		this.children[1].style.overflow = 'hidden';
	} else {
		return false;
	}
}



// SEARCH



let serchEl = document.querySelector('.enter');
let searchEl2 = document.querySelector('html');


serchEl.addEventListener('click', upWidth);

searchEl2.addEventListener('dblclick', DownWidth) //dblclick


function upWidth() {
	serchEl.style.width = '330px';
	serchEl.style.transition = '0.5s';

	if (serchEl.addEventListener('click', upWidth) > 1) {
		serchEl.style.width = '230px';
		serchEl.style.transition = '0.5s';
	}
}

function DownWidth() {
	serchEl.style.width = '230px';
	serchEl.style.transition = '0.5s';
}





