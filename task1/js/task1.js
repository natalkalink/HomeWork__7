// Задача 1. Створити функцію, яка за номером місяця повертає його назву.

let month = parseInt(prompt('Введiть номер мiсяця', ''))

function getMonthName(month) {

	if (isNaN(month) || month < 1 || month > 12) {
		return "Невiрний номер мiсяця"
	}

	switch (month) {
		case 1:
			return "Січень"
		case 2:
			return "Лютий"
		case 3:
			return "Березень"
		case 4:
			return "Квітень"
		case 5:
			return "Травень"
		case 6:
			return "Червень"
		case 7:
			return "Липень"
		case 8:
			return "Серпень"
		case 9:
			return "Вересень"
		case 10:
			return "Жовтень"
		case 11:
			return "Листопад"
		case 12:
			return "Грудень"
	}
}
document.write(getMonthName(month))


// let month = parseInt(prompt('Введiть номер мiсяця', ''))

// function getMonthName(month) {
// 	if (isNaN(month)) {
// 		return "Будь ласка, введiть коректний номер місяця"
// 	}

// 	let monthName;
// 	switch (month) {
// 		case 1: monthName = "Січень"
// 			break
// 		case 2: monthName = "Лютий"
// 			break
// 		case 3: monthName = "Березень"
// 			break
// 		case 4: monthName = "Квітень"
// 			break
// 		case 5: monthName = "Травень"
// 			break
// 		case 6: monthName = "Червень"
// 			break
// 		case 7: monthName = "Липень"
// 			break
// 		case 8: monthName = "Серпень"
// 			break
// 		case 9: monthName = "Вересень"
// 			break
// 		case 10: monthName = "Жовтень"
// 			break
// 		case 11: monthName = "Листопад"
// 			break
// 		case 12: monthName = "Грудень"
// 			break
// 		default: monthName = "Некоректний номер місяця"
// 			break
// 	}

// 	return monthName
// }

// document.write(getMonthName(month))