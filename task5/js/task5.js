// Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

let centimeters = parseFloat(prompt('Введіть кількість сантиметрів:', ''))
let kilograms = parseFloat(prompt('Введіть кількість кілограмів:', ''))
let kilometers = parseFloat(prompt('Введіть кількість кілометрів:', ''))

function centimetersToInches(cm) {
	return cm / 2.54
}

function kilogramsToPounds(kg) {
	return kg / 0.453592
}

function kilometersToMiles(km) {
	return km / 1.60934
}

let inches = centimetersToInches(centimeters)
let pounds = kilogramsToPounds(kilograms)
let miles = kilometersToMiles(kilometers)

document.write(`
	${centimeters} См. в дюймах: ${inches.toFixed(2)}<br>
	${kilograms} Кг. у фунтах: ${pounds.toFixed(2)}<br>
	${kilometers} Км. в милях: ${miles.toFixed(2)}
	`)
