/** @format */

const onSubmit = () => {
	document.querySelectorAll('.true')?.forEach((e) => {
		e.classList.add('show');
	});
};

const onDelete = () => {
	document.querySelectorAll('input').forEach((e) => {
		e.checked = false;
	});
	document.querySelectorAll('.true')?.forEach((e) => {
		e.classList.remove('show');
	});
};
