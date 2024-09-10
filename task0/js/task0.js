// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

let month = parseInt(prompt('Введiть номер мiсяця', ''))

function getSeason(month) {
	switch (month) {
		case 12:
		case 1:
		case 2:
			return "Зима"
		case 3:
		case 4:
		case 5:
			return "Весна"
		case 6:
		case 7:
		case 8:
			return "Лiто"
		case 9:
		case 10:
		case 11:
			return "Осiнь"
		default:
			return "Невiрний номер мiсяца"
	}
}

document.write(getSeason(month))




// let month = parseInt(prompt('Введiть номер мiсяця', ''))

// function getSeason(month) {
// 	if (month < 1 || month > 12) {
// 		return "Невiрний номер мiсяца"
// 	}

// 	if (month === 12 || month === 1 || month === 2) {
// 		return "Зима"
// 	} else if (month >= 3 && month <= 5) {
// 		return "Весна"
// 	} else if (month >= 6 && month <= 8) {
// 		return "Лiто"
// 	} else if (month >= 9 && month <= 11) {
// 		return "Осiнь"
// 	}
// }

// document.write(getSeason(month))