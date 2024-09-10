// Задача 6. Створити функцію,
// яка створює таблицю з вказаною кількістю рядків і
// стовпців (таблиця заповнюється заданим фіксованим повідомленням).

let rows = parseInt(prompt('Введiть кiлькiсть рядкiв', ''))
let cols = parseInt(prompt('Введiть кiлькiсть стовпцiв', ''))
let message = prompt('Введiть текст', 'message')

function createTable(rows, cols, message) {
	let table = '<table border="2"; width: 70%;">'

	for (let i = 0; i < rows; i++) {
		table += '<tr>'
		for (let j = 0; j < cols; j++) {
			table += `<td>${message}</td>`
		}
		table += '</tr>'
	}
	table += '</table>'
	return table
}

document.write(createTable(rows, cols, message))