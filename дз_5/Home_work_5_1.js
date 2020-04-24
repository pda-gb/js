function chess(place) {
  var coordinateNumb = ['1', '2', '3', '4', '5', '6', '7', '8'];
  var coordinateChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  var tableChess = document.createElement('table');
  for (var y = 0, colorCheck = 0; y < 10; y++, colorCheck++) {
    var row = document.createElement('tr');
    for (var x = 0; x < 10; x++) {
      var cell = document.createElement('th');
      colorCheck++;
			//заполняем координатами
			if ((x === 0 || x === 9) || (y === 0 || y === 9)) {
        // здесь заполним пустотой угловые ячейки
        if ((x === 0 && y === 0) || (x === 9 && y === 9) || (x === 0 && y === 9) || (x === 9 && y === 0)) {
          cell.innerText = '';
					cell.style.backgroundColor = 'gray';
        } else {// иначе заполняем координаты
          cell.innerText = coordinateChar[x-1] || coordinateNumb[y-1];
					cell.style.backgroundColor = 'gray';
        };
      } else {// игровое поле
        if (colorCheck % 2 == 0) { // цвет в ш.м. порядке

          cell.style.backgroundColor = 'darkred';
					// var spanCell = document.createElement('span');
					// document.querySelectorAll('span').style.backgroundColor = '#87CEEB';
        };

      }
      row.appendChild(cell);// собираем ячейки в строки
    };
    tableChess.appendChild(row);// строки в таблицу
		tableChess.className = 'chess';
  };
  place.appendChild(tableChess);// присваиваем ш.м. доску к указанному элкменту
};

// +++++++++++++ рисуем доску ++++++++++++
chess(document.querySelector('.main'));
