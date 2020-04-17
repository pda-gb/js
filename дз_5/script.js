// function chess() {
//   // var cell = [];
//   // var row = [];
//   var board = [];
//   for (var row = 0; row < 10; row++) {
//     board[row] = [];
//     for (var cell = 0; cell < 10; cell++) {
//       board[row][cell] = 'x';
//     };
//   };
// 	// console.log(board);
// 	// document.write(board);
// };
// chess();


var tableChess = document.createElement('table');
var row1 = document.createElement('tr');
var cel1 = document.createElement('th');
cel1.innerText = 'qqq';
// console.log(cel1.innerText);
// console.log(cel1.innerHTML);
for (var i = 0; i < 1; i++) {
  row1.appendChild(cel1);
};
tableChess.appendChild(row1);
// var qw.innerText = '<h1>qw1e123123</h1>';

// вар 1
document.getElementsByClassName('main').innerHTML = tableChess;

// вар 2
// var x = document.getElementsByClassName('main');
// x.append(tableChess);

// x.innerHTML = tableChess;
console.log(cel1.innerText);
console.log(cel1.innerHTML);
console.log(row1.innerHTML);
console.log(tableChess.innerHTML);
