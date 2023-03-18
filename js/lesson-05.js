// !Заняття 5 робота з DOM

// !Задача 1
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
// 	const currentCubePositionLeft = parseInt(cubeEl.style.left);
// 	const currentCubePositionTop = parseInt(cubeEl.style.top);

// 	if (e.key === leftKey) {
// 		if (currentCubePositionLeft === 0) {
// 			return;
// 		}
// 		cubeEl.style.left = `${currentCubePositionLeft - moveStep}px`;
// 	} else if (e.key === rightKey) {
// 		cubeEl.style.left = `${currentCubePositionLeft + moveStep}px`;
// 	} else if (e.key === upKey) {
// 		if (currentCubePositionTop === 0) {
// 			return;
// 		}
// 		cubeEl.style.top = `${currentCubePositionTop - moveStep}px`;
// 	} else {
// 		cubeEl.style.top = `${currentCubePositionTop + moveStep}px`;
// 	}
// }

// !Задача 2
// *Напишіть прогрму для шифрування текстово повідомлення за допомогою шифру Цезаря

// const UA_ALPHABET = [
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
// 	'щ',
// 	'ь',
// 	'ю',
// 	'я',
// ];

// const ENG_ALPHABET = [
// 	'a',
// 	'b',
// 	'c',
// 	'd',
// 	'e',
// 	'f',
// 	'g',
// 	'h',
// 	'i',
// 	'j',
// 	'k',
// 	'l',
// 	'm',
// 	'n',
// 	'o',
// 	'p',
// 	'q',
// 	'r',
// 	's',
// 	't',
// 	'u',
// 	'v',
// 	'w',
// 	'x',
// 	'y',
// 	'z',
// ];

// let alphabet = ENG_ALPHABET;

// // alphabet = UA_ALPHABET; - український алфавіт

// const refs = {
// 	input: document.querySelector('#data'),
// 	encryptBtn: document.querySelector('#encryptBtn'),
// 	decryptBtn: document.querySelector('#decryptBtn'),
// 	text: document.querySelector('#text > span'),
// };

// const encryptKey = 3;

// refs.encryptBtn.addEventListener('click', handleEncrypt);
// refs.decryptBtn.addEventListener('click', handleDecrypt);

// function handleEncrypt() {
// 	clearRelult();

// 	if (refs.input.value.trim() === '') {
// 		refs.input.value = '';
// 		return;
// 	}

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

// 	renderRelult(result);

// 	refs.input.value = '';
// }

// function handleDecrypt() {
// 	clearRelult();

// 	if (refs.input.value.trim() === '') {
// 		refs.input.value = '';
// 		return;
// 	}

// 	const result = refs.input.value
// 		.trim()
// 		.split('')
// 		.map(el => {
// 			const currentIndex = alphabet.findIndex(letter => letter === el);
// 			const decryptIndex = currentIndex - encryptKey;

// 			if (currentIndex === -1) {
// 				return el;
// 			}

// 			if (decryptIndex < 0) {
// 				return alphabet[alphabet.length + decryptIndex];
// 			}

// 			return alphabet[decryptIndex];
// 		})
// 		.join('');

// 	renderRelult(result);

// 	refs.input.value = '';
// }

// function renderRelult(data) {
// 	refs.text.innerHTML = data;
// }

// function clearRelult() {
// 	refs.text.innerHTML = '';
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

// const TARGET_ELEMENT = 'TD';
// const LOCAL_STORAGE_KEY = 'active cell';
// const activeCellIndex = localStorage.getItem(LOCAL_STORAGE_KEY);

// const refs = {
// 	table: document.querySelector('.board > table'),
// 	tableCells: document.querySelectorAll('.board > table td'),
// };

// refs.table.addEventListener('click', handleTableCellClick);

// setActiveCell(activeCellIndex);

// function handleTableCellClick({ target }) {
// 	if (target.nodeName !== TARGET_ELEMENT) return;

// 	document.querySelector('.board .active')?.classList.remove('active');
// 	target.classList.add('active');

// 	const currentActiveCellIndex = [...refs.tableCells].indexOf(target);
// 	localStorage.setItem(LOCAL_STORAGE_KEY, currentActiveCellIndex);
// }

// function setActiveCell(index) {
// 	refs.tableCells[index]?.classList.add('active');
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
