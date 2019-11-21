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





//function randoms() {
//	
//	let rand = Math.floor( Math.random() * 2000);
//	console.log(rand);	
//}
//
//
//function interval() {
//	let intid = setInterval(randoms, 3000);
//}

//interval();


//function rand() {
//	let element = document.getElementById('rand');
//	let element2 = document.getElementById('rand2');
//	let element3 = document.getElementById('rand3');
//	let element4 = document.getElementById('rand4');
//	let element5 = document.getElementById('rand5');
//	let element6 = document.getElementById('rand6');
//	let element7 = document.getElementById('rand7');
//	let element8 = document.getElementById('rand8');
//	let element9 = document.getElementById('rand9');
//	let element10 = document.getElementById('rand10');
//	let element11 = document.getElementById('rand11');
//	let element12 = document.getElementById('rand12');
//	let element13 = document.getElementById('rand13');
//	let element14 = document.getElementById('rand14');
//	
//	let gof = Math.random() * (3000 - 1500);
//	
//	element.innerText = Math.floor(1500 + gof);
//	element2.innerText = Math.floor(Math.random() * 1000);
//	element3.innerText = Math.floor(Math.random() * 700);
//	element4.innerText = Math.floor(Math.random() * 500);
//	element5.innerText = Math.floor(Math.random() * 400);
//	element6.innerText = Math.floor(Math.random() * 400);
//	element7.innerText = Math.floor(Math.random() * 400);
//	element8.innerText = Math.floor(Math.random() * 300);
//	element9.innerText = Math.floor(Math.random() * 300);
//	element10.innerText = Math.floor(Math.random() * 300);
//	element11.innerText = Math.floor(Math.random() * 200);
//	element12.innerText = Math.floor(Math.random() * 200);
//	element13.innerText = Math.floor(Math.random() * 200);
//	element14.innerText = Math.floor(Math.random() * 100);
//}
//
//function Interval() {
//	setInterval(rand, 20000);
//}
//
//Interval();
