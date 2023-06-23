var mdp = document.querySelector('.password');
var bouton = document.querySelector(".generatePassword");
var lettre = '';
var charSpe = '';
var nb = '';
var maj = '';
var mdpFinal = '';

const genLetters = () => {
	let randomIndex = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
	let randomLetter = String.fromCharCode(randomIndex);
	return randomLetter;
};
const genCharSpe = () => {
	let randomIndex = Math.floor(Math.random() * (47 - 33 + 1)) + 33;
	let randomCharSpe = String.fromCharCode(randomIndex);
	return randomCharSpe;
};
const genNumber = () => {
	let randomIndex = Math.floor(Math.random() * 9) + 1;
	return randomIndex;
};
const genMaj = () => {
	let randomIndex = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
	let randomLetter = String.fromCharCode(randomIndex).toUpperCase();
	return randomLetter;
};

const generatePassword = () => {
	//ASCII table :

	for (let i = 0; i < 10; i++) {
		lettre = genLetters();
		charSpe = genCharSpe();
		nb = genNumber();
		maj = genMaj();
		mdpFinal += `${lettre}${charSpe}${maj}${nb}`;
	}

	mdp.textContent = `${mdpFinal}`;

	mdpFinal = '';
};



bouton.addEventListener("click", generatePassword);