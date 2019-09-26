let progress = document.querySelector('.pogress');

window.addEventListener('scroll', ScrollBar);

function ScrollBar() {
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollHeight = document.documentElement.scrollTop;
	
	let per = scrollHeight / height * 100;
	
	progress.style.width = per + '%';
}