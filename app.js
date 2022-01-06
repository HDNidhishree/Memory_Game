document.addEventListener("DOMContentLoaded", () => {
	// Card options
	const arrayOfCards = [
		{
			name: "hotdog",
			img: "images/hotdog.png",
		},
		{
			name: "pizza",
			img: "images/pizza.png",
		},
		{
			name: "cheeseburger",
			img: "images/cheeseburger.png",
		},
		{
			name: "ice-cream",
			img: "images/ice-cream.png",
		},
		{
			name: "milkshake",
			img: "images/milkshake.png",
		},
		{
			name: "fries",
			img: "images/fries.png",
		},
		{
			name: "cheeseburger",
			img: "images/cheeseburger.png",
		},
		{
			name: "ice-cream",
			img: "images/ice-cream.png",
		},
		{
			name: "pizza",
			img: "images/pizza.png",
		},
		{
			name: "cheeseburger",
			img: "images/cheeseburger.png",
		},
		{
			name: "ice-cream",
			img: "images/ice-cream.png",
		},
		{
			name: "milkshake",
			img: "images/milkshake.png",
		},
	];

	arrayOfCards.sort(() => 0.5 - Math.random());
	const grid = document.querySelector(".grid");
	const resultDisplay = document.querySelector("#result");
	var cardsChoosen = [];
	var cardsChoosenId = [];
	var cardsWon = [];

	// function to create board

	let createBoard = () => {
		for (let i = 0; i < arrayOfCards.length; i++) {
			var card = document.createElement("img");
			card.setAttribute("src", "images/blank.png");
			card.setAttribute("data-id", i);
			card.addEventListener("click", flipCard, false);
			grid.appendChild(card);
		}
	};

	// check for matches
	let checkForMatch = () => {
		var cards = document.querySelectorAll("img");
		const optionOneId = cardsChoosenId[0];
		const optionTwoId = cardsChoosenId[1];
		if (cardsChoosen[0] === cardsChoosen[1]) {
			alert("You found a match! Hurray!");
			cards[optionOneId].setAttribute("src", "images/white.png");
			cards[optionTwoId].setAttribute("src", "images/white.png");
			cardsWon.push(cardsChoosen);
		} else {
			cards[optionOneId].setAttribute("src", "images/blank.png");
			cards[optionTwoId].setAttribute("src", "images/blank.png");
			alert("Oops! You got the wrong match! Try again..!");
		}
		cardsChoosen = [];
		cardsChoosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === arrayOfCards.length / 2) {
			resultDisplay.textContent = "Congrats! You cracked it all!!!";
		}
	};

	// flip your card
	function flipCard() {
		var cardId = this.getAttribute("data-id");
		cardsChoosen.push(arrayOfCards[cardId].name);
		cardsChoosenId.push(cardId);
		this.setAttribute("src", arrayOfCards[cardId].img);

		if (cardsChoosen.length == 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
