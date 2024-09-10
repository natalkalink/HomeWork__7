// Задача 9. Дано покази температур (довільна кількість). 
// Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.


let numberTemperatures = parseInt(prompt('Введіть кількість температур', '3'))

function countNegativeTemperatures(numberTemperatures) {
	let countTemp = 0

	for (let i = 0; i < numberTemperatures; i++) {
		let inputTemperature = parseFloat(prompt('Введіть покази температури', ''))


		if (inputTemperature < 0) {
			countTemp++
		}
	}
	return countTemp
}

const negativeCount = countNegativeTemperatures(numberTemperatures)

document.write(`Кількість від'ємних показів температури: ${negativeCount}`)



