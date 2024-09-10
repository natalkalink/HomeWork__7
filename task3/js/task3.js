// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 

let number1 = parseFloat(prompt('Введіть перше число', ''))
let number2 = parseFloat(prompt('Введіть друге число', ''))
let number3 = parseFloat(prompt('Введіть трете число', ''))
let number4 = parseFloat(prompt('Введіть четверте число', ''))

function getSum(number1, number2, number3, number4) {
	return number1 + number2 + number3 + number4
}
document.write(`Сума чисел дорівнює ${getSum(number1, number2, number3, number4).toFixed(2)}<br>`)

function getProduct(number1, number2, number3, number4) {
	return number1 * number2 * number3 * number4
}
document.write(`Добуток чисел дорівнює ${getProduct(number1, number2, number3, number4).toFixed(2)}<br>`)

function getAverage(number1, number2, number3, number4) {
	return (number1 + number2 + number3 + number4) / 4
}
document.write(`Середнє арифметичне чисел дорівнює ${getAverage(number1, number2, number3, number4).toFixed(2)}<br>`)

function getMin(number1, number2, number3, number4) {
	let min = number1

	if (number2 < min) {
		min = number2
	}
	if (number3 < min) {
		min = number3
	}
	if (number4 < min) {
		min = number4
	}

	return min
}
document.write(`Мінімальне значення чисел дорівнює ${getMin(number1, number2, number3, number4).toFixed(2)}<br>`);