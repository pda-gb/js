function charOfFigures(tblChes) {
  var allFigures = ['п', 'л', 'к', 'с', 'К!', 'Ф!', 'с', 'к', 'л'];
  var rwChes = tblChes.childNodes; // берём из доски строки
  for (y = 0; y < 10; y++) {
    var rwChesCurrent = rwChes[y]; // текущая строка
    for (x = 0; x < 10; x++) {
      var clChesCurrent = rwChesCurrent.childNodes; // текущая ячейка
      if (y === 1 || y === 8) {
        switch (x) { // ставим офицеров
          case 1:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[1];
            break;
          case 2:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[2];
            break;
          case 3:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[3];
            break;
          case 4:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[4];
            break;
          case 5:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[5];
            break;
          case 6:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[3];
            break;
          case 7:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[2];
            break;
          case 8:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = allFigures[1];
            break;
        };
      };                             // стр. ниже: по х формулу можно упростить, но работать перестаёт
      if (((y === 2) || (y === 7)) && ((0 < x) && (x < 9))) { // ставим пешки
        clChesCurrent[x].appendChild(document.createElement('span')).innerHTML = allFigures[0];
      };
    };
  };
};

// +++++++++++++ расставляем фигуры ++++++++++++
charOfFigures(document.querySelector('.chess'));
