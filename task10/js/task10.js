// Задача 10. Дано покази температур (довільна кількість).
// Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.


const numberTemperatures = parseInt(prompt('Введіть кількість температур', '3'))


function calculateAveragePositiveTemperature(numberTemperatures) {
	let sum = 0
	let countPositive = 0


	for (let i = 0; i < numberTemperatures; i++) {
		const inputTemperature = parseFloat(prompt('Введіть покази температури', ''))


		if (inputTemperature > 0) {
			sum += inputTemperature
			countPositive++
		}
	}

	if (countPositive === 0) {
		return 0
	}

	return sum / countPositive
}


const averagePositiveTemperature = calculateAveragePositiveTemperature(numberTemperatures)

document.write(`Середнє значення додатних показів температури: ${averagePositiveTemperature}`)