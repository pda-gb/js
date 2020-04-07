Урок 2. Основные операторы JavaScript
1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

Почему код даёт именно такие результаты?
2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);

3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). ### 7. *Сравнить null и 0. Попробуйте объяснить результат. ### 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

=========



//1

// c = ++a; alert(c);           // 2 - префиксная форма инкремента, сначала увеличивает, потом присваивает значение
// d = b++; alert(d);           // 1 - постфиксная -//-, сначала присваивает, потом увеличивает
// c = (2+ ++a); alert(c);      // 5 - а равно уже двум из предыдущей строки, опять увеличивается на 1 и складывается с 2, далее сумма присваивается к С.
// d = (2+ b++); alert(d);      // 4 - b равно уже двум из предыдущей строки, складывается с 2 и присваевается, только потом, срабатывает постфиксный инкремент.
// alert(a);                    // 3 - после предыдущих строк(двух инкрементов) 1 увеличилась до 3
// alert(b);                    // 3 - -//-


//2

// x = 5


//3
var a=+prompt('ВВедите число а:');
var b=+prompt('ВВедите число b:');
if(a>0 && b>0){
	alert('разность:'+(a-b));
}
if (a < 0 && b < 0) {
  alert('произведение:' + (a * b));
}
if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
  alert('сумма:' + (a + b));
}


//4

var min = +prompt('min');
var max = +prompt('max');
a = Math.trunc(Math.random() * (max - min) + min);
alert(a);
switch (a) {
	case '1':
	console.log(a)
	case '2':
	console.log(a)
	case '3':
	console.log(a)
	case '4':
	console.log(a)
	case '5':
	console.log(a)
	case '6':
	console.log(a)
	case '7':
	console.log(a)
	case '8':
	console.log(a)
	case '9':
	console.log(a)
	case '10':
	console.log(a)
	case '11':
	console.log(a)
	case '12':
	console.log(a)
	case '13':
	console.log(a)
	case '14':
	console.log(a)
	case '15':
	console.log(a)
	break;
	default:alert('error') ;

}




//5

function mathSumm(arg1, arg2) {
	return (arg1 + arg2);
}
function mathRazn(arg1, arg2) {
return (arg1 - arg2);
}
function mathUmnozhenie(arg1, arg2) {
	return (arg1 * arg2);
}
function mathDelenie(arg1, arg2) {
	return (arg1 / arg2);
}


//6

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case '+':
		return (arg1 + arg2);
    break;

    case '-':
		return (arg1 - arg2);
    break;

    case '*':
		return (arg1 * arg2);
    break;

    case '/':
		return (arg1 / arg2);
    break;

    // default:

  }
}
// доп. условие в этой задаче: "использовать функции из пункта 3", не понял что именно надо сделать


//7

Ноль - точно опеределённое, заданное число. Null это это отдельный тип чисел, при присвоении переменной, мы явно указываем ей, что она пуста и в ней ничего нет, не занимает памяти


//8

function power(val, pow){
	val_result = val * val;
	val = val_result;
	if (pov > 1){
	--pov;
	power(val, pow);
	}
	else {

	}return val_result;
}

