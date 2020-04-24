function charOfFigures(tblChes) {
  var whiteFigures = ['&#9817', '&#9814', '&#9816', '&#9815', '&#9812', '&#9813', '&#9815', '&#9816', '&#9814'];
  var blackFigures = ['&#9823', '&#9820', '&#9822', '&#9821', '&#9818', '&#9819', '&#9821', '&#9822', '&#9820'];
  // var blackFigures = ['п', 'л', 'к', 'с', 'К!', 'Ф!', 'с', 'к', 'л'];
  var rwChes = tblChes.childNodes; // берём из доски строки
  for (y = 2; y <= 8; y++) {
    var rwChesCurrent = rwChes[y]; // текущая строка
    for (x = 1; x <= 8; x++) {
      var clChesCurrent = rwChesCurrent.childNodes; // текущая ячейка
      if (y === 1) {
        switch (x) { // ставим офицеров
          case 1:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[1];
            break;
          case 2:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[2];
            break;
          case 3:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[3];
            break;
          case 4:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[4];
            break;
          case 5:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[5];
            break;
          case 6:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[3];
            break;
          case 7:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[2];
            break;
          case 8:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = whiteFigures[1];
            break;
        };
      };
      if (y === 8) {
        switch (x) { // ставим офицеров
          case 1:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[1];
            break;
          case 2:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[2];
            break;
          case 3:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[3];
            break;
          case 4:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[4];
            break;
          case 5:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[5];
            break;
          case 6:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[3];
            break;
          case 7:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[2];
            break;
          case 8:
            clChesCurrent[x].appendChild(document.createElement('span')).innerText = blackFigures[1];
            break;
        };
      };
      if (((y === 2)) && ((0 < x) && (x < 9))) { // ставим пешки
        clChesCurrent[x].appendChild(document.createElement('span')).innerHTML = whiteFigures[0];
      };
      if (((y === 7)) && ((0 < x) && (x < 9))) { // ставим пешки
        clChesCurrent[x].appendChild(document.createElement('span')).innerHTML = blackFigures[0];
      };
    };
  };

};

// +++++++++++++ расставляем фигуры ++++++++++++
charOfFigures(document.querySelector('.chess'));
