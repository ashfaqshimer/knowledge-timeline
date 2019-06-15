const items = document.querySelectorAll('#timeline li');

const isInViewport = element => {
	const rectangle = element.getBoundingClientRect();
	return (
		rectangle.top >= 0 &&
		rectangle.left >= 0 &&
		rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

const run = () =>
	items.forEach(item => {
		if (isInViewport(item)) {
			item.classList.add('show');
		}
	});

//Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
