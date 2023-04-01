// !Заняття 6 HTTP-запити

// !Задача 1
// *Отримати дані (зображення) з API і вивести їх на сторінку
// *Вводити в інпут можна тыльки число
// *https://dog.ceo/dog-api/

// const refs = {
// 	form: document.querySelector('.js-form-dogs-api'),
// 	input: document.querySelector('.js-input-dogs-api'),
// 	submitBtn: document.querySelector('.js-submit-btn-dogs-api'),
// 	list: document.querySelector('.js-list-dogs-api'),
// };

// refs.form.addEventListener('submit', getDogsImages);

// function getDogsImages(e) {
// 	e.preventDefault();

// 	const searchQuery = refs.input.value;

// 	fetchImages(searchQuery);
// }

// function fetchImages(query) {
// 	fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
// 		.then(response => {
// 			if (!response.ok) {
// 				throw new Error(response.status);
// 			}

// 			return response.json();
// 		})
// 		.then(data => {
// 			renderList(data.message);
// 		})
// 		.catch(error => console.log(error))
// 		.finally(() => {
// 			console.log('Я виконаюсь в будь-якому разі');
// 		});
// }

// function renderList(listItems) {
// 	const elements = listItems
// 		.map(
// 			(item, index) => `
//   		<li>
//         <img width="300" src="${item}" alt="Image ${index + 1}">
//       </li>
//       `
// 		)
// 		.join("");

// 	refs.list.insertAdjacentHTML('beforeend', elements);
// }

// !Задача 2
// *Отримати дані з API та вивести їх на сторінку
// *http://universities.hipolabs.com/search?country=Ukraine
// *http://universities.hipolabs.com/search?country=United+States

// const refs = {
// 	form: document.querySelector('.js-form'),
// 	input: document.querySelector('.js-input'),
// 	submitBtn: document.querySelector('.js-submit-btn'),
// 	list: document.querySelector('.js-list'),
// };

// refs.form.addEventListener('submit', getDogsImages);

// function getDogsImages(e) {
// 	e.preventDefault();

// 	const searchQuery = refs.input.value;

// 	fetchImages(searchQuery);
// }

// function fetchImages(query) {
// 	fetch(`http://universities.hipolabs.com/search?country=${query}`)
// 		.then(response => {
// 			if (!response.ok) {
// 				throw new Error(response.status);
// 			}

// 			return response.json();
// 		})
// 		.then(data => {
// 			renderList(data);
// 		})
// 		.catch(error => console.log(error))
// 		.finally(() => {
// 			console.log('Я виконаюсь в будь-якому разі');
// 		});
// }

// function renderList(listItems) {
// 	const elements = listItems
// 		.map(
// 			({ name, web_pages: [url] }, index) => `
//   		<li>
//         <a href="${url}" target="_blank">${index + 1}) ${name}</a>
//       </li>
//       `
// 		)
// 		.join("");

// 	refs.list.insertAdjacentHTML('beforeend', elements);
// }

// !Задача 3
// *Отримати дані з API та вивести їх на сторінку
// *http://colormind.io/

// const refs = {
// 	colorBlocks: document.querySelector('.js-color-blocks'),
// };

// const options = {
// 	method: 'POST',
// 	body: JSON.stringify({ model: 'default' }),
// };

// fetch('http://colormind.io/api/', options)
// 	.then(response => {
// 		return response.json();
// 	})
// 	.then(({ result }) => {
// 		console.log(result);

// 		renderBlocks(result);
// 	})
// 	.catch(error => console.log(error))
// 	.finally(() => {
// 		console.log('Я виконаюсь в будь-якому разі');
// 	});

// function renderBlocks(dataArray) {
// 	const blocks = dataArray
// 		.map(
// 			([r, g, b]) => `
//     <li
// 			style="width: 100px; height: 100px; background-color: rgb(${r}, ${g}, ${b})"
// 		></li>`
// 		)
// 		.join('');

// 	console.log(blocks);

// 	refs.colorBlocks.insertAdjacentHTML('beforeend', blocks);
// }

// !Задача 4
// *Отримати дані з API і вивести їх на сторінку
// *https://randomuser.me/

// const refs = {
// 	user: document.querySelector('.js-user'),
// };

// fetch('https://randomuser.me/api/')
// 	.then(response => response.json())
// 	.then(user => renderUserData(user.results[0]));

// function renderUserData({
// 	name: { title, first, last },
// 	email,
// 	picture: { large },
// }) {
// 	refs.user.innerHTML = `
//   <img src="${large}" alt="" class="js-user__photo" />
//     <h2 class="js-user__name">${title}. ${first} ${last}</h2>
// 	  <p class="js-user__email">${email}</p>
//   `;
// }

// !Задача 5
// *Отримати дані з API і вивести їх на сторінку
// *https://deckofcardsapi.com/

// const refs = {
// 	cards: document.querySelector('.cards'),
// };

// async function getDeckId() {
// 	try {
// 		const response = await fetch(
// 			'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// 		);

// 		const data = await response.json();

// 		getCards(data.deck_id);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// async function getCards(deckId) {
// 	try {
// 		const response = await fetch(
// 			`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
// 		);

// 		const data = await response.json();

// 		renderCards(data.cards);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// function renderCards(cardsArray) {
// 	const cardsMarckup = cardsArray
// 		.map(
// 			({ code, image }) => `
//     <li>
//     	<img src="${image}" alt="${code}">
//     </li>
//   `
// 		)
// 		.join('');

// 	refs.cards.insertAdjacentHTML('beforeend', cardsMarckup);
// }

// getDeckId();

// !Задача 6
// *Зробити POST та PUT запити на API
// *https://reqres.in/

// const postOptions = {
// 	method: 'POST',
// 	headers: {
// 		'Content-type': 'application/json',
// 	},
// 	body: JSON.stringify({
// 		name: 'morpheus',
// 		job: 'leader',
// 	}),
// };

// fetch('https://reqres.in/api/users', postOptions);

// const putOptions = {
// 	method: 'PUT',
// 	headers: {
// 		'Content-type': 'application/json',
// 	},
// 	body: JSON.stringify({
// 		name: 'morpheus222',
// 		job: 'leader222',
// 	}),
// };

// fetch('https://reqres.in/api/users/2', putOptions);

// !Задача 7
// *Зробити GET і POST запити на API
// *https://api.fake.rest/2b7b0aba-9b0f-414e-a71f-768793bfae9f/get

// fetch('https://api.fake.rest/2b7b0aba-9b0f-414e-a71f-768793bfae9f/get');

// const postOptions = {
// 	method: 'POST',
// 	headers: {
// 		'Content-type': 'application/json',
// 	},
// 	body: JSON.stringify({
// 		name: 'Serhii',
// 		job: 'team-lead',
// 	}),
// };

// fetch(
// 	'https://api.fake.rest/2b7b0aba-9b0f-414e-a71f-768793bfae9f/post',
// 	postOptions
// );
