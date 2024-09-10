// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.


let dayNumber = parseInt(prompt('Введіть номер дня (1-7)', ''))

function isWorkingDay(dayNumber) {


	if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
		return "Невiрний номер дня.Введіть номер дня (1-7)!"
	}

	switch (dayNumber) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			return "Це робочий день"
		case 6:
		case 7:
			return "Це вихідний день"
	}
}

document.write(isWorkingDay(dayNumber))
