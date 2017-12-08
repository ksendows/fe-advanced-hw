const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let keyboard = [[],[],[]];
let alphabetArray = alphabet.split("");

for (let i = 0; i < alphabetArray.length; i++) {
	if (i<12) {keyboard[0][i] = alphabetArray[i]}
		else if (i<23) {keyboard[1][i-12] = alphabetArray[i]}
			else {keyboard[2][i-23] = alphabetArray[i]};
}


console.log (keyboard);

console.log (keyboard[1][5]+keyboard[0][2]+keyboard[1][8]+keyboard[1][8]+keyboard[0][8]);

console.log (keyboard[1][6]+keyboard[1][0]+keyboard[2][3]+keyboard[1][0]+keyboard[1][1]+
	keyboard[2][2]+keyboard[0][3]+keyboard[0][7]+keyboard[0][9]+keyboard[0][4]);

console.log (keyboard[0][4]+keyboard[0][3]+keyboard[1][0]+keyboard[0][7]+keyboard[2][5]+keyboard[0][2]+keyboard[0][3]);