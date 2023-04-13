const openCardImg = document.querySelectorAll(".card .show");
const closeCardImg = document.querySelectorAll(".card .hide");
const star = document.querySelector(".star img");
const cards = document.querySelectorAll(".card");
openCardImg.forEach((img) => {
	img &&
		img.addEventListener("click", (e) => {
			cards.forEach((card) => card.classList.remove("active"));
			img.closest(".card").classList.add("active");
		});
});

closeCardImg.forEach((img) => {
	img &&
		img.addEventListener("click", (e) => {
			img.closest(".card").classList.remove("active");
		});
});

star &&
	star.addEventListener("click", (e) => {
		const random = Math.floor(Math.random() * cards.length);

		cards.forEach((card) => card.classList.remove("active"));
		cards[random] &&
			(cards[random].classList.add("active"), cards[random].scrollIntoView());
	});
