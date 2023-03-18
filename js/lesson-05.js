// !Заняття 5 робота з DOM

// !Задача 1 (доробити)
// *Напишіть код JavaScript, щоб кубик рухався, коли настискати стрілки вверх, вниз, вілво, вправо
// *Обмежити переміщення кубика щоб не виходив за межі екрану

// const cubeEl = document.querySelector('.cube');
// const moveStep = 30;

// const leftKey = 'ArrowLeft';
// const rightKey = 'ArrowRight';
// const upKey = 'ArrowUp';
// const downKey = 'ArrowDown';

// window.addEventListener('keydown', handleAroowsDown);
// function handleAroowsDown(e) {
// 	if (e.key === leftKey) {
// 		cubeEl.style.left = `${parseInt(cubeEl.style.left) - moveStep}px`;
// 	} else if (e.key === rightKey) {
// 		cubeEl.style.left = `${parseInt(cubeEl.style.left) + moveStep}px`;
// 	} else if (e.key === upKey) {
// 		cubeEl.style.top = `${parseInt(cubeEl.style.top) - moveStep}px`;
// 	} else {
// 		cubeEl.style.top = `${parseInt(cubeEl.style.top) + moveStep}px`;
// 	}
// }

// !Задача 2 (доделать)
// *Напишіть прогрму для шифрування текстово повідомлення за допомогою шифру Цезаря

// const alphabet = [
// 	'а',
// 	'б',
// 	'в',
// 	'г',
// 	'ґ',
// 	'д',
// 	'е',
// 	'є',
// 	'ж',
// 	'з',
// 	'и',
// 	'і',
// 	'ї',
// 	'й',
// 	'к',
// 	'л',
// 	'м',
// 	'н',
// 	'о',
// 	'п',
// 	'р',
// 	'с',
// 	'т',
// 	'у',
// 	'ф',
// 	'х',
// 	'ц',
// 	'ч',
// 	'ш',
// 	'Щ',
// 	'ь',
// 	'ю',
// 	'я',
// ];

// const refs = {
// 	input: document.querySelector('#data'),
// 	encryptBtn: document.querySelector('#encryptBtn'),
// 	decipterBtn: document.querySelector('#decipterBtn'),
// 	text: document.querySelector('#text'),
// };

// const encryptKey = 3;

// refs.encryptBtn.addEventListener('click', handleEncrypt);

// function handleEncrypt() {
// 	const result = refs.input.value
// 		.trim()
// 		.split('')
// 		.map(el => {
// 			const currentIndex = alphabet.findIndex(letter => letter === el);
// 			const encryptIndex = currentIndex + encryptKey;

// 			if (currentIndex === -1) {
// 				return el;
// 			}

// 			if (encryptIndex >= alphabet.length) {
// 				return alphabet[encryptIndex - alphabet.length];
// 			}

// 			return alphabet[encryptIndex];
// 		})
// 		.join('');

// 	renderEncryptedData(result);
// }

// function renderEncryptedData(data) {
// 	refs.text.innerHTML = data;
// }

// !Задача 3
// *Напишіть програму JavaScript для добавлення та видалення елементів зі спадного списку.

// const refs = {
// 	select: document.querySelector('#colorSelect'),
// 	removeOptionBtn: document.querySelector('#removeOption'),
// 	input: document.querySelector('#add'),
// 	addOptionBtn: document.querySelector('#addOption'),
// };

// refs.removeOptionBtn.addEventListener('click', handleRemoveOption);
// refs.addOptionBtn.addEventListener('click', handleAddOption);

// function handleRemoveOption() {
// 	refs.select.selectedOptions[0].remove();
// }

// function handleAddOption() {
// 	if (refs.input.value.trim() !== '') {
// 		refs.select.insertAdjacentHTML(
// 			'beforeend',
// 			`(<option>${refs.input.value.trim()}</option>)`
// 		);
// 	}

// 	refs.input.value = '';
// }

// !Задача 4
// *Напишіть програму JavaScript, щоб виділяти жирні слова (<strong>) наступного абзацу, наводячи курсор миші на посилання

// const refs = {
// 	link: document.querySelector('#link'),
// 	text: document.querySelector('#text'),
// 	stongWords: document.querySelectorAll('#text > strong'),
// };

// refs.link.addEventListener('mouseover', handleLinkMouseOver);
// refs.link.addEventListener('mouseout', handleLinkMouseOut);

// function handleLinkMouseOver() {
// 	hightLigthStrongWorks('red');
// }

// function handleLinkMouseOut() {
// 	hightLigthStrongWorks('inherit');
// }

// function hightLigthStrongWorks(color) {
// 	refs.stongWords.forEach(el => (el.style.backgroundColor = color));
// }

// !Задача 5
// *Напишіть програму JavaScript для відображення випадкового зображення (натискання кнопки) з наступного списку.

// const images = [
// 	'https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg',
// 	'https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg',
// 	'https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg',
// ];

// const refs = {
// 	showRandomImageBtn: document.querySelector('#show-random-image'),
// 	imageBox: document.querySelector('#image-box'),
// };

// refs.showRandomImageBtn.addEventListener('click', handleAddRandomImage);

// function handleAddRandomImage() {
// 	const randomIndex = getRandomIndex(images.length);

// 	refs.imageBox.innerHTML = `<img src="${images[randomIndex]}" alt="random image" width="250" height="150">`;
// }

// function getRandomIndex(max) {
// 	return Math.floor(Math.random() * (max - 0)) + 0;
// }

// !Задача 6 (доробити)
// *Делегування подій
// *- 1. Коли користувач клікає на будь-яку комірку із таблиці, потрібно її зробити активною - добавити клас .active
// *- 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// *- 3. Після перезавантаження сторінки активна комірка зберігається

// const table = document.querySelector('.board > table');
// const targetEl = 'TD';

// table.addEventListener('click', handleTableCellClick);

// function handleTableCellClick(e) {
// 	const activeTableCell = document.querySelector('.active');

// 	if (activeTableCell) {
// 		activeTableCell.classList.remove('active');
// 	}

// 	if (e.target.nodeName === targetEl) {
// 		e.target.classList.add('active');
// 	}
// }

// !Задача 7
// *Напишіть програму JavaScript TodoList для додавання і видалення завдань у список

// const refs = {
// 	form: document.querySelector('form'),
// 	addBtn: document.querySelector('#addTask'),
// 	input: document.querySelector('#add'),
// 	list: document.querySelector('#tasks'),
// };

// refs.form.addEventListener('submit', handleAddTask);
// refs.addBtn.addEventListener('click', handleAddTask);

// function handleAddTask(e) {
// 	e.preventDefault();

// 	refs.list.insertAdjacentHTML(
// 		'beforeend',
// 		`
// 		<li class="item">${refs.input.value}<button type="button">Remove</button></li>`
// 	);
// 	refs.form.reset();
// }

// refs.list.addEventListener('click', handleRemoveTask);

// function handleRemoveTask(e) {
// 	if (e.target.nodeName === 'BUTTON') {
// 		e.target.closest('.item').remove();
// 	}
// }
