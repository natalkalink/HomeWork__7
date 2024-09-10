// Задача 8. Створити функцію, яка виводить банер
// (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення
// (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

function createBanner(imageSrc, title, link) {

	document.write(`
	  <div class="banner">
		 <a href="../img/${link}" title="${title}">
			<img src="${imageSrc}" alt="${title}">
		 </a>
	  </div>
	`)
}


const imageSrc = '../img/banner.jpg'
const title = 'Перейти на головну сторінку'
const link = '../index.html'

createBanner(imageSrc, title, link)


