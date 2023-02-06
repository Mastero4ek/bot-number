'use strict'

function botNumber(x) {
	function number() {
		const guessNumber = prompt("Угадай число от 1 до 100");

		if(isNaN(guessNumber) || guessNumber == '') {
			alert("Введи число!");
		} else
		if(guessNumber === null) {
			return alert("Игра окончена");
		} else
		if(guessNumber > x) {
			alert("Загаданное число меньше");
		} else
		if(guessNumber < x) {
			alert("Загаданное число больше");
		} else
		if(guessNumber == x) {
			return alert("Поздравляю, Вы угадали!!!");
		}

		number();
	}

	number();
}

botNumber(10);