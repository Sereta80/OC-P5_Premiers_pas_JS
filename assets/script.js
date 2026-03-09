// Slide header
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration de l'index
let currentIndex = 0;

// Arrows
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	console.log("J'ai cliqué sur arrowLeft");
	// updateDots('previous');
	currentIndex --;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	updateSlider();
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	console.log("J'ai cliqué sur arrowRight");
	// updateDots('next');
	currentIndex ++;
	if (currentIndex > slides.length - 1) {
		currentIndex = 0;
	}
	updateSlider();
});


// Dots
let baliseDots = document.querySelector('.dots');

// 1ère méthode avec for
// for (let i = 0; i < slides.length; i++) {
// 	let newDot = document.createElement("div")
// 	newDot.classList.add("dot")
// 	if (i === 0) {
// 		newDot.classList.add("dot_selected")
// 	}
// 	baliseDots.appendChild(newDot)
// }

// 2ème méthode avec forEach
slides.forEach((slide, index) => {
	let newDot = document.createElement("div")
	newDot.classList.add("dot")
	if (index === 0) {
		newDot.classList.add("dot_selected")
	}
	baliseDots.appendChild(newDot)
});

// Gestion du slider
const allDots = document.querySelectorAll(".dots .dot");

// function updateDots(order) {
// 	console.log(allDots)
// 	const selected = document.querySelector(".dot_selected")
// 	const dotsList = Array.from(allDots).indexOf(selected)
// 	console.log(dotsList)
// 	allDots[dotsList].classList.remove("dot_selected")
// 	if (order === 'previous') {
// 		if (dotsList-1 < 0) {
// 			allDots[allDots.length-1].classList.add("dot_selected")
// 		} else {
// 			allDots[dotsList-1].classList.add("dot_selected")
// 		}
// 	} else {
// 		if (dotsList+1 > allDots.length-1) {
// 			allDots[0].classList.add("dot_selected")
// 		} else {
// 			allDots[dotsList+1].classList.add("dot_selected")
// 		}
// 	}
// }

function updateSlider() {
	// 1. Mettre à jour le point sélectionné
	allDots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	});

	// 2. Mettre à jour l'image
	let bannerImg = document.querySelector('.banner-img');
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;

	// 3. Mettre à jour le texte
	let bannerTxt = document.querySelector('#banner p');
	bannerTxt.innerHTML = slides[currentIndex].tagLine;
}

