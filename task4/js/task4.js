// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

let num1 = parseFloat(prompt('Введіть перше число', ''))
let num2 = parseFloat(prompt('Введіть друге число', ''))
let num3 = parseFloat(prompt('Введіть трете число', ''))

function countEven(num1, num2, num3) {
	let count = 0
	if (num1 % 2 === 0) count++
	if (num2 % 2 === 0) count++
	if (num3 % 2 === 0) count++
	return count
}

function countPositive(num1, num2, num3) {
	let count = 0
	if (num1 > 0) count++
	if (num2 > 0) count++
	if (num3 > 0) count++
	return count
}

function countGreaterThan100(num1, num2, num3) {
	let count = 0
	if (num1 > 100) count++
	if (num2 > 100) count++
	if (num3 > 100) count++
	return count
}
function getAnalyticalData(num1, num2, num3) {
	const evenNumbersAmount = countEven(num1, num2, num3)
	const positiveNumbersAmount = countPositive(num1, num2, num3)
	const bigNumbersAmount = countGreaterThan100(num1, num2, num3)
	return {
		evenNumbersAmount,
		positiveNumbersAmount,
		bigNumbersAmount
	}
}
let result = getAnalyticalData(num1, num2, num3)

document.write(`
	Ви ввели числа : ${num1},${num2},${num3}<br>
	Кількість парних чисел: ${result.evenNumbersAmount}<br>
	Кількість додатних чисел: ${result.positiveNumbersAmount}<br>
	Кількість чисел, більших за 100: ${result.bigNumbersAmount}
	`)
