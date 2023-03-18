// !Задача 1

// *Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти чи має об'єкт такий ключ - поверне true, інакше false

// const obj = {
// 	name: "Jhon",
// 	car: "Audi",
// 	carColor: "White",
// };

// // #Варіант 1 (метод hasOwnProperty)

// const checkIncludesKey = key => obj.hasOwnProperty(key);

// console.log(checkIncludesKey("car"));
// console.log(checkIncludesKey("car23123"));

// // #Варіант 2 (оператор in)

// const checkIncludesKey2 = key => key in obj;

// console.log(checkIncludesKey2("car"));
// console.log(checkIncludesKey2("car23123"));

// !Задача 2

// *Напишіть функцію для перевірки об'єкта: чи є елемент простим об'єктом, чи масивом, null.

// const checkType = value => {
// 	if (Array.isArray(value)) {
// 		return 'array';
// 	} else if (value === null) {
// 		return 'null';
// 	}
// 	return typeof value;
// };

// console.log(checkType('qwe'));
// console.log(checkType(5));
// console.log(checkType(NaN));
// console.log(checkType(undefined));
// console.log(checkType([]));
// console.log(checkType({}));
// console.log(checkType(null));

// !Задача 3

// *Створіть функцію multiplyNumeric(obj), яка множить всі числові властивості об'єкта obj на 2.

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu",
// };

// // #Варіант 2 (оператор typeof)

// const multiplyNumeric = obj => {
// 	for (const key in obj) {
// 		if (typeof obj[key] === "number") {
// 			obj[key] *= 2;
// 		}
// 	}
// };

// multiplyNumeric(menu);
// console.log(menu);

// // #Варіант 2 (метод isNaN)

// const multiplyNumeric2 = obj => {
// 	for (const key in obj) {
// 		if (!isNaN(obj[key])) {
// 			obj[key] *= 2;
// 		}
// 	}
// };

// multiplyNumeric2(menu);
// console.log(menu);

// !Задача 4

// *У нас є об'єкт, в якому зберігаються зарплати команди.
// *Напишіть код для обчислення суми всіх зарплат і збережіть його результат у змінній sum.
// *Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
// 	Mango: 570,
// 	Poly: 900,
// 	Ajax: 1470,
// };

// // #Варіант 1 (цикл for in)

// const calculateTotalSalaries = allSalaries => {
// 	let total = 0;
// 	for (const salary in allSalaries) {
// 		total += allSalaries[salary];
// 	}
// 	return total;
// };

// console.log(calculateTotalSalaries(salaries));

// console.log(calculateTotalSalaries({}));

// // #Варіант 2 (метод values конструктора Object + метод масиву reduce)

// const calculateTotalSalaries2 = allSalaries =>
// 	Object.values(allSalaries).reduce((a, b) => a + b, 0);

// console.log(calculateTotalSalaries2(salaries));

// console.log(calculateTotalSalaries2({}));

// !Задача 5

// *Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів і рядок з назвою каменю.
// *Функція повертає загальну вартість каміння з таким ім'ям

// const stones = [
// 	{ name: "Emerald", price: 1300, quantity: 4 },
// 	{ name: "Diamond", price: 2700, quantity: 6 },
// 	{ name: "Sapphire", price: 400, quantity: 7 },
// 	{ name: "Rubble", price: 150, quantity: 100 },
// ];

// // #Варіант 1 (цикл for of)

// const calcTotalPrice = (stones, stonesName) => {
// 	for (const stone of stones) {
// 		if (stone.name === stonesName) {
// 			return stone.price * stone.quantity;
// 		}
// 	}
// };

// console.log(calcTotalPrice(stones, "Emerald"));

// // #Варіант 2
// // #метод масиву find() - знаходимо об'єкт з колекції по нізві каменю
// // #метод рядків trim() - видалення пробілів
// // #метод рядків toLowerCase() - нормалізація

// const calcTotalPrice2 = (stones, stonesName) => {
// 	const activeStone = stones.find(stone => {
// 		return stone.name.toLowerCase() === stonesName.trim().toLowerCase();
// 	});

// 	if (!activeStone) {
// 		return `Каменю з назвою ${stonesName} не знайдено`;
// 	}

// 	return activeStone.price * activeStone.quantity;
// };

// console.log(calcTotalPrice2(stones, "Diamond"));

// !Задача 6

// *Напишіть функцію sumInput(), яка:
// *- Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// *- Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// *- Підраховує та повертає суму елементів масиву.
// *P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

// // #Варіант 1 (проверка на ввод НЕ числа через функцию isNaN())

// function sumInput() {
// 	const numbers = [];
// 	let summ = 0;

// 	while (true) {
// 		const input = prompt("enter number");
// 		const number = Number(input);

// 		if (isNaN(input) || input === null || input === "") {
// 			break;
// 		}

// 		numbers.push(number);
// 	}

// 	for (const item of numbers) {
// 		summ += item;
// 	}

// 	return summ;
// }

// console.log(sumInput());

// // #Варіант 2 (проверка на ввод НЕ числа через функцию !isFinite())

// function sumInput2() {
// 	const numbers = [];
// 	let summ = 0;

// 	while (true) {
// 		const input = prompt("enter number");
// 		const number = Number(input);

// 		if (!isFinite(input) || input === null || input === "") {
// 			break;
// 		}

// 		numbers.push(number);
// 	}

// 	for (const item of numbers) {
// 		summ += item;
// 	}

// 	return summ;
// }

// console.log(sumInput2());

// !Задача 7

// *Напишіть код, щоб видалити всі елементи в заданому масиві
// *Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.

// // #Варіант 1 (через цикл for)

// const deleteElement = (array, element) => {
// 	for (let i = 0; i < array.length; i += 1) {
// 		if (array[i] === element) {
// 			array.splice(i, 1);
// 		}
// 	}
// 	return array;
// };

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// arr = deleteElement(arr, 56);

// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

// // #Варіант 2 (через метод масиву filter())

// const deleteElement2 = (array, element) =>
// 	array.filter(item => item !== element);

// let arr2 = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// arr2 = deleteElement2(arr, 56);

// console.log(arr2); //[23, 4, 78, 5, 63, 45, 210]

// !Задача 8
// *Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunkArray = (array, quantity) => {
// 	const relultArray = [];
// 	let i = 0;

// 	while (i < array.length) {
// 		let part = array.slice(i, quantity + i);

// 		relultArray.push(part);

// 		i += quantity;
// 	}

// 	return relultArray;
// };

// console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// !Задача 9
// *Напишіть функцію для об'єднання довільної кількості масивів в один загальний.

// // #Варіант 1 (через цикл for of + операція spread)

// const addArray = (...rest) => {
// 	const newArray = [];

// 	for (const element of rest) {
// 		newArray.push(...element);
// 	}

// 	return newArray;
// };

// console.log(addArray([2, 3, 4], [6, 4, 9], [34, 6, 4]));

// // #Варіант 2 (через цикл for of + spread)

// const addArray2 = (...rest) => rest.flatMap(item => item);

// console.log(addArray2([2, 3, 4], [6, 4, 9], [34, 6, 4]));

// // #Варіант 3 (через concat)

// const addArray3 = (...rest) => {
// 	let newArray = [];

// 	for (const element of rest) {
// 		newArray = newArray.concat(element);
// 	}

// 	return newArray;
// };

// console.log(addArray3([2, 3, 4], [6, 4, 9], [34, 6, 4]));

// !Задача 10
// *Напишіть функцію, яка повертає масив, що містить лише унікальні елементи масиву.

// let stringsArray = [
// 	"торт",
// 	"тортик",
// 	"кекс",
// 	"сир",
// 	"бутерброд",
// 	"сир",
// 	"шоколад",
// 	"кекс",
// 	"масло",
// 	"олія",
// 	"торт",
// ];

// // #Варіант 1 (через методи масиву forEach та includes)

// const unique1 = arr => {
// 	const uniaueElementsArray = [];

// 	const uniqueElement = arr.forEach(item => {
// 		if (!uniaueElementsArray.includes(item)) {
// 			uniaueElementsArray.push(item);
// 		}
// 	});

// 	return uniaueElementsArray;
// };

// console.log(unique1(stringsArray));

// // #Варіант 2 (через метод масиву filter)

// const unique2 = arr =>
// 	arr.filter((item, index, array) => array.indexOf(item) === index);

// console.log(unique2(stringsArray));

// // #Варіант 3 (через операцію spread і new Set)

// const unique3 = arr => {
// 	return [...new Set(arr)];
// };

// console.log(unique3(stringsArray));
