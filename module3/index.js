const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let keyboard = [[],[],[]];
let alphabetArray = alphabet.split("");

alphabetArray.forEach(function(item, i) {
  if (i<12) {keyboard[0][i] = item}
		else if (i<23) {keyboard[1][i-12] = item}
			else {keyboard[2][i-23] = item};
});


console.log (keyboard);

console.log (`${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`);

console.log (`${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${
	keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`);

console.log (`${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${
	keyboard[0][2]}${keyboard[0][3]}`);