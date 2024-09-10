// Задача 7. Створити функцію,
// яка випадковим чином виводить на екран одне із 4 зображень
// (шляхи до зображень передаються у функцію)

const img1 = 'zima.jpg'
const img2 = 'vesna.jpg'
const img3 = 'leto.jpg'
const img4 = 'osen.jpg'


function displayRandomImage(img1, img2, img3, img4) {
	let rundImgNumber = 1 + Math.floor(Math.random() * 4)
	let rundImgName = ''

	switch (rundImgNumber) {
		case 1:
			rundImgName = img1
			break
		case 2:
			rundImgName = img2
			break
		case 3:
			rundImgName = img3
			break
		case 4:
			rundImgName = img4
			break
	}

	document.write(`<img src="../img/${rundImgName}" alt="${rundImgName}">`)
}


displayRandomImage(img1, img2, img3, img4)
