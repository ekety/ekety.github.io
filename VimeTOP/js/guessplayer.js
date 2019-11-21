
function init() {
	let el = document.getElementById('zero');
	el.onclick = ShowAnswer;
}

function ShowAnswer(obj) {	
	let image = obj.target;
	let id = image.id;
	image.src = 'img/player/' + id + '.png';
	let imghide = document.getElementById('hod');
	imghide.style.display = 'none';
}

//function hide() {
//	let imghide = document.getElementById('hod');
//	
//}

init();
