// !Дополнительная практика з ментором
// !Занятие 1 - ветвления и цыклы

// !Задача 1
// *Напишіть код, який запитуватиме логін за допомогою prompt і буде виводити результат в консоль браузера

// *Якщо користувач вводить "Admin", то prompt запитує пароль.
// *Якщо нічого не ввели або натиснута клавіша Esc вивести рядок "Cancel"
// *Інакше вивести рядок "I don't know you"

// *Пароль перевіряти так:
// *Якщо введено пароль "I am admin", то вивести рядок "Hello!" інакше виводити рядок "Wrong password!"

// *Рішення

// const login = prompt('Введіть логін');

// console.log(login);

// // 1 - оголошуємо змінні
// const adminLogin = 'Admin';
// const adminPassword = 'I am admin';

// // 2 - перевіряємо логін
// if (login === adminLogin) {
// 	const password = prompt('Введіть пароль');
// 	// 3 - перевіряємо пароль
// 	if (password === adminPassword) {
// 		console.log('Hello!');
// 	} else console.log('Wrong password!');
// } else if (!login) {
// 	console.log('Cancel');
// } else console.log("I don't know you");

// !Задача 2
// *Напишіть через світч пошук автора мови програмування
// *Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// *- PHP Расмус Лердорф
// *- C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// *- Swift Кріс Латтнер
// *- JS Брендан Ейх
// *- Java Джеймс Гослінг
// *- Python Гвідо ван Россум

// const lang = prompt("Введіть мову");

// // ? потрібен для перевірки чи є такий метод на результаті роботи prompt (користувач може ввести рядок, а може число або взагалі натиснути "скасувати")
// const normalizedLang = lang?.toLocaleLowerCase();

// switch (normalizedLang) {
// 	case "php":
// 		console.log("PHP Расмус Лердорф");
// 		break;

// 	case "c#":
// 		console.log(
// 			"C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота"
// 		);
// 		break;

// 	case "fwift":
// 		console.log("Swift Кріс Латтнер");
// 		break;

// 	case "js":
// 		console.log("JS Брендан Ейх");
// 		break;

// 	case "java":
// 		console.log("Java Джеймс Гослінг");
// 		break;

// 	case "python":
// 		console.log("Python Гвідо ван Россум");
// 		break;

// 	case null:
// 		console.log("Відмінено користувачем");
// 		break;

// 	default:
// 		console.log("Таку мову не знайдено");
// }

// !Задача 3
// *Напишіть через світч калькулятор
// *Потрібно ввести перше число в prompt, потім математичну операцію
// *Тоді ввести наступне число

// const number1 = Number(prompt("Введіть перше число"));
// const number2 = Number(prompt("Введіть друге число"));
// const operation = prompt("Введіть операцію");

// switch (operation) {
// 	case "+":
// 		console.log(number1 + number2);
// 		break;

// 	case "-":
// 		console.log(number1 - number2);
// 		break;

// 	case "*":
// 		console.log(number1 * number2);
// 		break;

// 	case "/":
// 		console.log(number1 / number2);
// 		break;

// 	default:
// 		console.log(NaN);
// }

// !Задача 4
// *Напишіть цикл, який виводить у консоль
// *1. числа від max до min за спаданням
// *2. Виведіть у консоль усіх парні числа від min до max
// *3. За допомогою циклу for додайте всі парні числа від min до max

// const max = 90;
// const min = 33;
// let total = 0;

// 1. числа від max до min за спаданням
// for (let i = max; i >= min; i -= 1) {
// 	console.log(i);
// }

// 2. Виведіть у консоль усіх парні числа від min до max
// for (let i = min; i <= max; i += 1) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// 3. За допомогою циклу for додайте всі парні числа від min до max
// for (let i = min; i <= max; i += 1) {
// 	if (i % 2 === 0) {
// 		total += i;
// 	}
// }

// console.log(total);

// !Задача 5
// *Напишіть програму, щоб обертати рядок введений в propmt у зворотньому напрямку
// *При цьому потрібно залишити першу літеру на своєму місці

// const string = prompt("Введіть рядок тексту");

// let invertedString = "";

// // Вариант 1
// for (let i = string.length - 1; i > 0; i -= 1) {
// 	invertedString += string[i];
// }

// const firstLetter = string[0];

// console.log(firstLetter + invertedString);

// // Вариант 2word
// console.log(firstLetter + string.slice(1).split("").reverse().join(""));

// !Задача 6
// *При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// *Після введення число додається до значення змінної total.
// *Операція введення числа продовжується доти, поки користувач не натисне кнопку Cancel в prompt.

// *Після того як користувач припинив введення, натиснувши на кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."

// *Зробити перевірку, що користувач ввів саме число, а не довільний набір символів.

// let number = prompt("Введіть число");

// let total = 0;

// while (number !== null) {
// 	if (!isNaN(Number(number))) {
// 		total += Number(number);
// }

// 	number = prompt("Введіть ще одне число");
// }

// console.log(`Загальна сума введених чисел дорівнює ${total}.`);

// !Задача 7
// *Напишіть цикл, який пропонує ввести число більше 100 через prompt.
// *Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// *Цикл повинен запитувати число, поки користувач не введе число більше 100, або натисне кнопку "скасувати" в prompt

// do {
// 	let number = prompt("Введіть число більше 100");
// 	if (Number(number) > 100 || number === null) {
// 		console.log(number);
// 		break;
// 	}
// } while (true);

// !Задача 8
// *За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// *А податкова обчислює і повертає:
// *1 - кінцеву суму зп без податків
// *2 - cуму податків всього
// *Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = 1000;
// const period = 12;
// const tax = 0.05;

// let totalTax = 0;
// let totalSalary = 0;

// for (let i = 0; i < period; i += 1) {
// 	totalTax += salary * tax;
// 	totalSalary += salary - salary * tax;
// }

// console.log(totalSalary);
// console.log(totalTax);

// !Задача 9
// *Напишіть програму для перевірки чи є число простим чи ні

// const number = prompt("Введіть число");
// let isPrime = true;

// for (let i = 2; i < number; i += 1) {
// 	if (number % i === 0) {
// 		isPrime = false;
// 		break;
// 	}
// }

// console.log(number, "isPrime?", isPrime);
