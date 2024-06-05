/** @format */

const onSubmit = () => {
	let answerList = {};
	let correctList = {};
	let questionList = new Set();
	let correctNum = 0;
	document.querySelectorAll('input').forEach((e) => {
		const name = e.getAttribute('name');
		if (e.classList.contains('true')) {
			if (e.checked)
				answerList[name] = answerList[name] ? answerList[name] + 1 : 1;
			correctList[name] = correctList[name] ? correctList[name] + 1 : 1;
		}

		questionList.add(name);
	});

	questionList.forEach((e) => {
		if (answerList[e] === correctList[e]) correctNum++;
	});

	console.log(correctNum);

	console.log(answerList, correctList, questionList);

	document.getElementById('score').innerText = `${
		(correctNum / questionList.size) * 100
	} / 100`;
	document.getElementById(
		'num'
	).innerText = `${correctNum} / ${questionList.size}`;
	document.getElementById('pop-up').style.display = 'block';

	document.querySelectorAll('.true')?.forEach((e) => {
		e.classList.add('text-green');
	});
};

const onClose = () => {
	document.getElementById('pop-up').style.display = 'none';
};

const onDelete = () => {
	document.querySelectorAll('input').forEach((e) => {
		e.checked = false;
	});
	document.querySelectorAll('.true')?.forEach((e) => {
		e.classList.remove('text-green');
	});
};
