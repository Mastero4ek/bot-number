'use strict'

function botNumber(n) {
	function number(x) {
		const guessNumber = prompt("Угадай число от 1 до 100");

		if(isNaN(guessNumber) || guessNumber == '') {
			alert("Введи число!");
		} else
		if(guessNumber === null) {
			return alert("Игра окончена");
		} else
		if(guessNumber > x) {
			n--;

			if(n == 0) {
				let stopGame = confirm("Попытки закончились, хотите сыграть еще?");

				if(!stopGame) return;
				n = 10;
			} else {
				alert(`Загаданное число меньше, осталось ${n} попыток`);
			}
		} else
		if(guessNumber < x) {
			n--;

			if(n == 0) {
				let stopGame = confirm("Попытки закончились, хотите сыграть еще?");
				
				if(!stopGame) return;
				n = 10;
			} else {
				alert(`Загаданное число больше, осталось ${n} попыток`);
			}
		} else
		if(guessNumber == x) {
			let newGame = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");

			if(!newGame) return;
			n = 10;
		}

		number(33);
	}

	number(33);
}

botNumber(10);