let pictures = [
	'images/1.jpg',
	'images/2.jpg',
	'images/3.jpg',
	'images/4.jpg',
	'images/5.jpg',
	'images/6.jpg',
];

let btn = document.querySelector('.btn');
let images = document.querySelector('.images');
let counter = 1;

btn.addEventListener('click', function () {
	if (counter === 6) {
		counter = 0;
	} else {
		images.src = pictures[counter];
		counter = counter + 1;
	}
});
