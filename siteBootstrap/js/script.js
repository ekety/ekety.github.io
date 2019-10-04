			// PROGRESSBAR
let progress = document.querySelector('.progress');

window.addEventListener('scroll', scrollBar);


function scrollBar() {
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	let Scrollheight = document.documentElement.scrollTop;

	let per = Scrollheight / height * 100;

	progress.style.width = per + '%';
}

			//INPUT



