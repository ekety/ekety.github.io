let elems = document.getElementsByClassName('green');
console.log(elems.length); // 15

function inner(max, min) {
	for (let i = 0; i < el.length; i++) {
		let range = Math.random() * (2500 - 1500)
		elems[i].innerHTML = Math.floor( 500 + range);
	}
}

function set() {
	setInterval(inner, 9000);
}

inner();
set();