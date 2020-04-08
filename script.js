// Урок 3. Циклы, массивы, структуры данных
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//
// for(…){// здесь пусто}
// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx


// 1

var i = 0;
value = 0;
while (value <= 100) {
  // var i = 0;

  i = value;
  while (i > 1) {
    --i;
    if (i == 1) {
      console.log(value);
      break;
    }

    if (value % i != 0) {
      continue;
    } else {
      break;
    }
  }

++value;
}


// 2-3

basket = [];  // корзина
var product = new Object();  // продукт
function addProduct(){  // ф. добавляет(создаёт) новый товар
	this.name = prompt('Имя товара:');
	this.prise = +prompt('Цена:');
};

var question = 'y';
	i = 0;  // индекс массива => "количество" товаров в корзине
while (question == 'y') { // цикл закидывания продуктов в корзину

	product = new addProduct();
	basket[i] = product;  // закидываем в корзину
	++i;
	question = prompt('Добавить ещё товар? (y\\N): '); // спрашиваем
	if (question == 'y') {
		continue;
	}
	else {
		break;
	}
}

function countBasketPrice(){  // считаем сумму товаров в корзине
	var sumPrice = 0;
	var sumProduct = 0;
	for (var i in basket) {
		sumPrice += basket[i].prise;  // сумма
		sumProduct += 1; // количество товаров
	};
	alert('Итого товаров: '+sumProduct+'\nНа сумму: '+sumPrice);
};
countBasketPrice();


// 4

for (var i = 0; i < 10; alert(i++)) {

};


// 5

var str = '';
for (var i = 1; i <= 20; i++) {
	str += 'x';
	console.log(str);
