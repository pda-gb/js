function isAnswer(x) { // проверка на допустимость ответа(от 1 до 4)
	if (x == 'q') {
    return true;
  } else {
    if (isNaN(x) || (!isFinite(x))) {
      alert('Вы ввели недопустимый символ');
      return false;
    } else if (x < 1 || x > 4) {
      alert('Ваше число выходит из допустимого диапозона');
      return false;
    };
  }
  return true;
}

var quit = false;
var cash = 0; // заработано всего
var cash2 = 0;// несгораемая сумма
for (var i = 0; i <= 20; i++) {
  do {
    var answer = prompt(allQuestions[i].q + allQuestions[i].a1 + allQuestions[i].a2 + allQuestions[i].a3 + allQuestions[i].a4 + '[прав. ответ: '+allQuestions[i].a0+']' + '\nЗавершить игру: q');
  } while (!isAnswer(answer));

	switch (answer) {
		case 'q':

			break;
		case String(allQuestions[i].a0) :
			cash += allQuestions[i].c;
			if (allQuestions[i].c0) {
				cash2 +=allQuestions[i].c;
			};
			alert('Правильно!\n'+'Вы заработали: '+cash+'\nНесгораемая сумма: '+cash2);
			break;
		default :
			alert('Не правильно!');
			answer = 'q';
			break;
	};

  if (answer == 'q') {
		alert('Вы заработали: '+cash2);
  	break;
  };

};
