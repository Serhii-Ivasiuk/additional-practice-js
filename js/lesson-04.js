// !Заняття 4 перебираючі методи масивів

// !Задача 1
// *Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// *Якщо він є, то потроібно оновити його в коризні
// *Якщо немає, то потрібно додати новий продукт до кошику покупок
// *Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const tShirt = {
// 	id: 33,
// 	title: 'T-shirt',
// 	price: 99,
// 	count: 1,
// };

// const jeans = {
// 	id: 29,
// 	title: 'Jeans',
// 	price: 199,
// 	count: 1,
// };

// let basketItems = [
// 	{
// 		id: 28,
// 		title: 'iPhone 14',
// 		price: 1599,
// 		count: 3,
// 	},
// 	{
// 		id: 29,
// 		title: 'Jeans',
// 		price: 199,
// 		count: 2,
// 	},
// ];

// // #Рішення

// function addItemToBasket(product) {
// 	const currentProduct = basketItems.find(element => element.id === product.id);
// 	if (currentProduct) {
// 		return basketItems.map(element => {
// 			if (element.id === product.id) {
// 				return {
// 					...element,
// 					count: element.count + 1,
// 				};
// 			}
// 			return element;
// 		});
// 	} else {
// 		return [...basketItems, product];
// 	}
// }

// console.log(basketItems);

// basketItems = addItemToBasket(tShirt);
// basketItems = addItemToBasket(jeans);

// console.log(basketItems);

// total = basketItems.reduce((acc, { price, count }) => {
// 	return (acc += price * count);
// }, 0);

// console.log('total:', total);

// !Задача 2
// *За допомогою методу forEach потрібно заповнити масив uploadedFiles
// *baseUrl потрібно передати, як this

// const imagesName = [
// 	'car.png',
// 	'grass.png',
// 	'avatar.png',
// 	'user.png',
// 	'sea.png',
// 	'water.png',
// 	'bird.png',
// ];
// const baseUrl = { domain: 'domain-name.com' };
// let uploadedFiles = [];

// const resultUploadedFiles = [
// 	'domain-name.com/upload/car.png',
// 	'domain-name.com/upload/grass.png',
// 	'domain-name.com/upload/avatar.png',
// 	'domain-name.com/upload/user.png',
// 	'domain-name.com/upload/sea.png',
// 	'domain-name.com/upload/water.png',
// 	'domain-name.com/upload/bird.png',
// ];

// // #Рішення 1

// const path = '/upload/';

// imagesName.forEach(function (item) {
// 	uploadedFiles.push(`${this.domain}${path}${item}`);
// }, baseUrl);

// console.log(uploadedFiles);

// // #Рішення 2

// const path = '/upload/';

// uploadedFiles = imagesName.map(
// 	elem => `${baseUrl.domain}${path}${elem}`,
// 	baseUrl
// );

// console.log(uploadedFiles);

// // #Рішення 3

// const path = '/upload/';

// uploadedFiles = imagesName.reduce(
// 	(acc, elem) => [...acc, `${baseUrl.domain}${path}${elem}`],
// 	[]
// );

// console.log(uploadedFiles);

// !Задача 3
// *Потрібно отримати URL адресу із адресного рядка браузера.
// *Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const link =
// 	'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';

// // #Рішення

// const url = new URL(link);
// console.log(url);

// const { search } = url;
// console.log(search);

// const result = search
// 	.slice(1)
// 	.split('&')
// 	.reduce((acc, item) => {
// 		const [key, value] = item.split('=');
// 		acc[key] = value;
// 		return acc;
// 	}, {});

// console.log(result);

// !Задача 4
// *Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// #Рішення 1

// const data = [0, 1, false, 2, undefined, '', 3, null];

// function compact(array) {
// 	return array.filter(item => item);
// }

// console.log(compact(data)); // [1, 2, 3]

// #Рішення 2

// const data = [0, 1, false, 2, undefined, '', 3, null];

// function compact(array) {
// 	return array.filter(Boolean);
// }

// console.log(compact(data)); // [1, 2, 3]

// !Задача 5
// *Перетворіть масив об’єктів виборців на підрахунок кількості людей, які проголосували

// const voters = [
// 	{ name: 'Bob', age: 30, voted: true },
// 	{ name: 'Jake', age: 32, voted: true },
// 	{ name: 'Kate', age: 25, voted: false },
// 	{ name: 'Sam', age: 20, voted: false },
// 	{ name: 'Phil', age: 21, voted: true },
// 	{ name: 'Ed', age: 55, voted: true },
// 	{ name: 'Tami', age: 54, voted: true },
// 	{ name: 'Mary', age: 31, voted: false },
// 	{ name: 'Becky', age: 43, voted: false },
// 	{ name: 'Joey', age: 41, voted: true },
// 	{ name: 'Jeff', age: 30, voted: true },
// 	{ name: 'Zack', age: 19, voted: false },
// ];

// // #Рішення

// function totalVotes(arr) {
// 	return arr.filter(item => item.voted).length;
// }

// console.log(totalVotes(voters)); // 7

// !Задача 6
// *Видаллення елементу з корзини

// const basketItems = [
// 	{
// 		id: 28,
// 		title: 'iPhone 14',
// 		price: 1599,
// 		count: 3,
// 	},
// 	{
// 		id: 29,
// 		title: 'Jeans',
// 		price: 199,
// 		count: 2,
// 	},
// 	{
// 		id: 33,
// 		title: 'T-shirt',
// 		price: 99,
// 		count: 1,
// 	},
// ];

// // #Рішення

// function removeItemByID(id) {
// 	return basketItems.filter(item => item.id !== id);
// }

// console.log(removeItemByID(28));

// !Задача 7
// *Порахувати суму кожного додатнього елемента
// *Якщо вхідні дані є масивом чисел, повернути суму всіх додатніх. Якщо масив порожній або в ньому немає додатних чисел, поверніть 0.

// const input = [1, -4, 12, 0, -3, 29, -150]; // 42

// // #Рішення

// function calcSumm(arr) {
// 	return arr.reduce((acc, number) => {
// 		if (number > 0) {
// 			acc += number;
// 		}
// 		return acc;
// 	}, 0);
// }

// console.log(calcSumm(input));

// !Задача 8
// *Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає у ньому елементи між a та b і повертає масив цих елементів.
// *Функція повинна повертати новий масив та не змінювати поточний.

// let arr = [5, 3, 8, 1];

// // #Рішення

// function filterRange(arr, a, b) {
// 	return arr.filter(item => item >= a && item <= b);
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (збігаються значення)
// console.log(arr); // 5,3,8,1 (без змін)

// !Задача 9
// *Розробники люблять скорочувати все:
// *- k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
// *- Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
// *- Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
// *- Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
// *- У реченні не буде розділових знаків. g2d l2k e6e

// const input = 'Every developer likes to mix kubernetes and javascript'; // 'E3y d7r l3s to mix k8s and j8t'

// // #Рішення

// const shorterWords = input
// 	.split(' ')
// 	.map(word => {
// 		if (word.length < 4) {
// 			return word;
// 		} else {
// 			return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
// 		}
// 	})
// 	.join(' ');

// console.log(shorterWords);

// !Задача 10
// *Сортувати у порядку за зменшенням

// let arr = [5, 2, 1, -10, 8];

// #Рішення

// function descendingNumbers(numbers) {
// 	return numbers.sort((a, b) => b - a);
// }

// console.log(descendingNumbers(arr)); // 8, 5, 2, 1, -10

// !Задача 10
// *Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.

// let bruce = { name: 'Bruce', age: 25 };
// let john = { name: 'Jhon', age: 30 };
// let maria = { name: 'Maria', age: 28 };

// let arr = [bruce, john, maria];
// console.log(arr);

// // #Рішення

// function sortByAge(arr) {
// 	return arr.slice().sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);
// console.log(sortByAge(arr));

// !Задача 11
// *Маючи масив потенційних виборців, поверніть об’єкт, що представляє результати голосування
// *Включіть, скільки потенційних виборців було у віці 18-25 років, скільки від 26-35 років, скільки від 36-55 років, і скільки з кожного з цих вікових діапазонів фактично проголосували.
// *Отриманий об’єкт, що містить ці дані, повинен мати 6 властивостей. Дивіться приклад виведення внизу.

// // { numYoungVotes: 1,
// //   numYoungPeople: 4,
// //   numMidVotesPeople: 3,
// //   numMidsPeople: 4,
// //   numOldVotesPeople: 3,
// //   numOldsPeople: 4
// // }

// const voters = [
// 	{ name: 'Bob', age: 30, voted: true },
// 	{ name: 'Jake', age: 32, voted: true },
// 	{ name: 'Kate', age: 25, voted: false },
// 	{ name: 'Sam', age: 20, voted: false },
// 	{ name: 'Phil', age: 21, voted: true },
// 	{ name: 'Ed', age: 55, voted: true },
// 	{ name: 'Tami', age: 54, voted: true },
// 	{ name: 'Mary', age: 31, voted: false },
// 	{ name: 'Becky', age: 43, voted: false },
// 	{ name: 'Joey', age: 41, voted: true },
// 	{ name: 'Jeff', age: 30, voted: true },
// 	{ name: 'Zack', age: 19, voted: false },
// ];

// // #Рішення

// function voterResults(arr) {
// 	return [
// 		filterGroupAge(arr, 18, 25),
// 		filterGroupAge(arr, 26, 35),
// 		filterGroupAge(arr, 36, 55),
// 	].reduce((acc, item) => {
// 		console.log(item);
// 		const data = {
// 			countVoters: item.length,
// 			countVoted: item.filter(item => item.voted).length,
// 		};
// 		return [...acc, data];
// 	}, []);
// }

// function filterGroupAge(arr, minAge, maxAge) {
// 	return arr.filter(item => item.age >= minAge && item.age <= maxAge);
// }

// console.log(voterResults(voters));

// !Задача 12
// *Напишіть функцію додавання необмежених чисел
// *Функція addNumber() повертає суму всіх чисел, переданих як аргументи функції.

// #Рішення

// function addNumber(...numbers) {
// 	return numbers.reduce((acc, number) => {
// 		return (acc += number);
// 	});
// }

// console.log(addNumber(2, 4, 5)); // 11
// console.log(addNumber(10, 45, 34, 130)); // 219

// !Задача 13
// *Отримайте ініціали імені
// *Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.

// #Рішення 1

// const input = 'George Raymond Richard Martin';

// function getNameInitials(string) {
// 	return string
// 		.split(' ')
// 		.map(item => item[0])
// 		.join('');
// }

// console.log(getNameInitials(input));

// #Рішення 2

// const input = 'George Raymond Richard Martin';

// function getNameInitials(string) {
// 	return string
// 		.split(' ')
// 		.map(([letter]) => letter)
// 		.join('');
// }

// console.log(getNameInitials(input));
