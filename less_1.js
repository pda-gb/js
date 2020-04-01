// Урок 1. Основы языка JavaScript
// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
// 2. Работа с переменными.
// 3. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
// 4. *Чему будет равно JS-выражение 1000 + "108"/
// 5. *Самостоятельно разобраться с атрибутами тега script (async и defer)/



//1

var tc = +prompt('Введите температуру в градусах по Цельсию:');
var tf =( (9 / 5)*tc + 32 );
alert('температура по Фаренгейту:' + tf);

// 2

var a = 10, b = 20;
a = a+b; //30
b = a-b; //10
a = a-b; //20
alert('a='+a+' b='+b);

//3

var name, admin;  // объявить переменную
name = 'Василий';  // присвоить Василий переменной name
admin = name;
alert('admin: '+admin);

//4

alert("JS-выражение (1000 + \"108\")= "+ (1000 + "108"));

//5

// async - загузка скрипта параллельно странице, страница не ожидает выполнения скрипта
// defer - скрипт выполнится только после полной загрузки сайта
