// !Задача 1

// *Переведіть текст вигляду border-left-width до borderLeftWidth
// *Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».

// *Тобто дефіси віддаляються, а всі слова після них отримують велику букву.

// function camelize(str, callback) {
// 	return str
// 		.split('-')
// 		.map((item, index) => (index === 0 ? item : callback(item)))
// 		.join('');
// }

// function changeFirstLetterToUpperCase(string) {
// 	return string[0].toUpperCase() + string.slice(1);
// }

// console.log(camelize('background-color', changeFirstLetterToUpperCase));

// !Задача 2
// *Напишіть функцію each(array, callback), яка першим параметром приймає масив, а другим - функцію,яка застосовується до кожного елемента масиву.
// *Функція each повинна повернути новий масив, елементами якого будуть результати виклику callback.
// *callback функції повинна множити елементи на 2.

// function each(array, callback) {
// 	const resArray = [];
// 	for (const item of array) {
// 		resArray.push(callback(item));
// 	}
// 	return resArray;
// }

// function multiplyNumber(number) {
// 	return number * 2;
// }

// console.log(each([1, 2, 3], multiplyNumber));

// !Задача 3

// *Виконай рефакторинг makeDish так, щоб не потрібно було щоразу передавати ім'я шефа.
// *Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish), що пам'ятає ім'я шефа при її виклику

// function makeShef(shefName) {
// 	return function makeDish(dish) {
// 		console.log(`${shefName} is cooking ${dish}`);
// 	};
// }

// const mango = makeShef('Mango');
// mango('apple pie');
// mango('green tea');

// const poly = makeShef('Poly');
// poly('muffins');
// poly('coffee');

// !Задача 4

// *Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// *- increment - збільшує counter на 1
// *- decrement - зменшує counter на 1
// *- getValue - повертає значення counter

// function makeCounter() {
// 	let counter = 0;

// 	return {
// 		value: 0,
// 		increment() {
// 			return (counter += 1);
// 		},
// 		decrement() {
// 			return (counter -= 1);
// 		},
// 		getValue() {
// 			return counter;
// 		},
// 	};
// }

// const counter1 = makeCounter();

// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// console.log(counter1.getValue());

// const counter2 = makeCounter();

// counter2.increment();
// counter2.decrement();
// counter2.decrement();
// counter2.decrement();
// console.log(counter2.getValue());

// !Задача 5

// *Напишіть функцію savePassword(password), яка приймає пароль і повертає внутрішню функцію, що приймає рядок і повертає true, якщо рядок збігається із збереженим паролем і false - якщо не збігається.

// function savePassword(password) {
// 	return function (userPassword) {
// 		return password === userPassword;
// 	};
// }

// const checkPassword = savePassword('qwe');
// console.log(checkPassword('qwe'));

// !Задача 6

// *Напишіть функцію для зберігання знижки. Функція повертає іншу функцію, яка приймає суму покупки і повертає фінальну суму із збереженою знижкою.

// function satDiscount(discount) {
// 	return function (summ) {
// 		return summ - summ * (discount / 100);
// 	};
// }

// const premiumDiscount = satDiscount(50);
// const seasonDiscount = satDiscount(20);
// const clientDiscount = satDiscount(5);

// console.log(premiumDiscount(3000));
// console.log(seasonDiscount(3000));
// console.log(clientDiscount(3000));

// !Задача 7

// *Виправте помилки, щоб код працював

// const jeans = {
// 	price: 500,
// 	showPrice() {
// 		console.log(this.price);
// 	},
// };

// jeans.showPrice();

// const phone = {
// 	price: 1000,
// };

// phone.showPrice = jeans.showPrice;

// phone.showPrice();

// *Виправте помилки, щоб код працював

// const product = {
// 	price: 5000,
// 	showPrice() {
// 		console.log(this.price);
// 	},
// };

// function callAction(action) {
// 	action();
// }

// callAction(product.showPrice.bind(product));

// *Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice(number) {
// 	console.log(this.price);
// 	console.log(number);
// }

// const laptop = {
// 	price: 1500,
// };

// showPrice.call(laptop, 1);
// showPrice.apply(laptop, [1]);

// !Задача 8

// *Даний об'єкт counter. Напишіть до нього getter та setter

// const counter = {
// 	_count: 3,

// 	get count() {
// 		return this._count;
// 	},
// 	set count(value) {
// 		this._count = value;
// 	},
// };

// console.log(counter.count);
// console.log((counter.count = 999));

// !Задача 9

// *Створіть об'єкт calculator із такими методами
// *- read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
// *- sum() повертає суму збережених значень
// *-min() повертає різницю збережених значень
// *-mult() перемножує збережені значення та повертає результат
// *-div() ділить збережені значення та повертає результат

// const calculator = {
// 	read(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	},

// 	sum() {
// 		return this.a + this.b;
// 	},

// 	min() {
// 		return this.a - this.b;
// 	},

// 	mult() {
// 		return this.a * this.b;
// 	},

// 	div() {
// 		return this.a / this.b;
// 	},
// };

// calculator.read(10, 2);
// console.log(calculator.sum());
// console.log(calculator.min());
// console.log(calculator.mult());
// console.log(calculator.div());

// *Регулярны вирази (доделать)

// const calculator2 = {
// 	parseString() {
// 		const originalString = prompt('Enter number 1, operator, number 2');

// 		const [firstOperand, operator, secondOperand] = originalString
// 			.replaceAll(' ', '')
// 			.split(/(\D)/);

// 		this.a = Number(firstOperand);
// 		this.b = Number(secondOperand);

// 		if (operator === '+') {
// 			console.log(this.sum());
// 		}
// 	},

// 	read(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	},

// 	sum() {
// 		return this.a + this.b;
// 	},

// 	min() {
// 		return this.a - this.b;
// 	},

// 	mult() {
// 		return this.a * this.b;
// 	},

// 	div() {
// 		return this.a / this.b;
// 	},
// };

// calculator2.parseString();

// !Задача 10

// *Напиши скрипт управління особистим кабінетом інтернет банку
// *Є об'єкт account у якому необхідно реалізувати методи для роботи з балансом та історією транзакцій
// *Типів транзакцій лише два.
// *Можна покласти або зняти гроші з рахунку

// const Transaction = {
// 	DEPOSIT: 'deposit',
// 	WITHDRAW: 'withdraw',
// };

// //Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

// const account = {
// 	//поточний баланс рахунку
// 	balance: 3000,

// 	// Історія транзакцій
// 	transactions: [{ type: 'deposit', amount: 3000, id: 1676718152627 }],

// 	//Метод створює та повертає об'єкт транзакцій
// 	//Приймає суму та тип транзакцій
// 	createTransaction(type, amount) {
// 		return {
// 			type,
// 			amount,
// 			id: Date.now(),
// 			date: new Date(),
// 		};
// 	},

// 	//Метод відповідає за додавання суми до балансу.
// 	//Приймає суму транкціонації.
// 	//Викликає createTransaction для створення об'єкта транзакції
// 	//після чого додає їх у історію транзакцій
// 	deposit(amount) {
// 		this.balance += amount;

// 		const newTransaction = this.createTransaction(Transaction.DEPOSIT, amount);

// 		this.transactions.push(newTransaction);
// 	},

// 	//Метод відповідає за зняття суми з балансу.
// 	//Приймає суму транкціонації.
// 	//Викликає createTransaction для створення об'єкта транзакції
// 	//після чого додає їх у історію транзакцій
// 	//Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
// 	//що недостатньо коштів на рахунку
// 	withdraw(amount) {
// 		if (this.balance >= amount) {
// 			console.log('Транзакція успішна');

// 			this.balance -= amount;

// 			const newTransaction = this.createTransaction(
// 				Transaction.WITHDRAW,
// 				amount
// 			);

// 			this.transactions.push(newTransaction);
// 		} else {
// 			console.log('На балансі не достатньо коштів');
// 		}
// 	},

// 	//Метод повертає поточний баланс
// 	getBalance() {
// 		return this.balance;
// 	},

// 	//Метод шукає та повертає об'єкт транзакції по id
// 	getTransactionDetails(id) {
// 		return this.transactions.find(item => item.id === id);
// 	},

// 	//Метод повертає кількість засобів певного типу транзакції з історії транзакцій
// 	getTransactionType(type) {
// 		return this.transactions.filter(item => item.type === type);
// 	},
// };

// account.deposit(3000);
// account.withdraw(5000);
// account.withdraw(1000);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(1676718152627));
// console.log(account.getTransactionType(Transaction.DEPOSIT));

// console.log(account);
