/** @format */

let mybutton = document.getElementById('myBtn');
let highlight = false;

if (localStorage.getItem('theme') === 'dark')
	document.getElementsByClassName('reading-frame')[0].classList.add('dark');

if (!!localStorage.getItem('font-size'))
	document
		.getElementsByClassName('reading-frame')[0]
		.classList.add(localStorage.getItem('font-size'));
else
	document.getElementsByClassName('reading-frame')[0].classList.add('font-16');

if (!!localStorage.getItem('font-family')) {
	document
		.getElementsByClassName('reading-frame')[0]
		.classList.add(localStorage.getItem('font-family'));
	document
		.getElementById(localStorage.getItem('font-family'))
		.classList.add('selected');
} else {
	document.getElementsByClassName('reading-frame')[0].classList.add('inter');
	document.getElementById('inter').classList.add('selected');
}

const setTheme = (mode) => {
	localStorage.setItem('theme', mode);
	if (mode === 'light')
		document
			.getElementsByClassName('reading-frame')[0]
			.classList.remove('dark');
	else
		document.getElementsByClassName('reading-frame')[0].classList.add('dark');
};
const setFontFamily = (mode) => {
	localStorage.setItem('font-family', mode);
	document.getElementsByClassName('reading-frame')[0].classList.remove('inter');
	document.getElementsByClassName('reading-frame')[0].classList.remove('time');
	document.getElementsByClassName('reading-frame')[0].classList.remove('noto');
	document
		.getElementsByClassName('reading-frame')[0]
		.classList.remove('bitter');
	document.getElementById('inter').classList.remove('selected');
	document.getElementById('noto').classList.remove('selected');
	document.getElementById('time').classList.remove('selected');
	document.getElementById('bitter').classList.remove('selected');

	document.getElementsByClassName('reading-frame')[0].classList.add(mode);
	document.getElementById(mode).classList.add('selected');
};
const setFontSize = (mode) => {
	localStorage.setItem('font-size', mode);
	document
		.getElementsByClassName('reading-frame')[0]
		.classList.remove('font-14');
	document
		.getElementsByClassName('reading-frame')[0]
		.classList.remove('font-16');
	document
		.getElementsByClassName('reading-frame')[0]
		.classList.remove('font-20');

	document.getElementsByClassName('reading-frame')[0].classList.add(mode);
};

const fullScreen = () => {
	document.getElementsByClassName('reading-frame')[0].requestFullscreen();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
	document.getElementsByClassName('reading-frame')[0].scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

function bottomFunction() {
	window.scrollTo({
		left: 0,
		top: document.body.scrollHeight,
		behavior: 'smooth',
	});
	document
		.getElementsByClassName('reading-frame')[0]
		.scrollTo({
			left: 0,
			top: document.getElementsByClassName('reading-frame')[0].scrollHeight,
			behavior: 'smooth',
		});
}

const highlightMode = () => {
	highlight = !highlight;
	if (highlight) {
		document.getElementById('hlBtn').style.backgroundColor =
			'rgba(244, 121, 32, 0.15)';
	} else {
		document.getElementById('hlBtn').style.backgroundColor = 'transparent';
	}
};
const hlElement = document.getElementsByClassName('reading-frame')[0];
hlElement.addEventListener('mouseup', (e) => {
	if (!highlight) return;
	var textToHighlight = window.getSelection().toString();
	var html = hlElement.innerHTML;
	var highlightedHtml = html.replace(
		new RegExp(textToHighlight, 'g'),
		'<span class="highlight">' + textToHighlight + '</span>'
	);
	hlElement.innerHTML = highlightedHtml;
});
