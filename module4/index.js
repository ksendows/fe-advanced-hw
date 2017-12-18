const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const addKeyboardLayout = (alphabet) => {

    let keyboard = [[],[],[]];
    let alphabetArray = alphabet.split("");

    alphabetArray.forEach(function(item, i) {
        if (i<12) {keyboard[0][i] = item}
        else if (i<23) {keyboard[1][i-12] = item}
        else {keyboard[2][i-23] = item}
    });

    return keyboard;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandCharInRow = (row) => keyboard[row-1][getRandom(0,keyboard[row-1].length)];

const getRandCharInAlph = () => alphabet.charAt(getRandom(0,alphabet.length));

const keyboard = addKeyboardLayout(alphabet);

console.log (`Массив-массивов клавиатурных строк:`);
console.log (keyboard);

console.log (`Случайная буква из 1й строки: ${getRandCharInRow(1)}`);
console.log (`Случайная буква из 2й строки: ${getRandCharInRow(2)}`);
console.log (`Случайная буква из 3й строки: ${getRandCharInRow(3)}`);

console.log (`Случайная буква из всего алфавита: ${getRandCharInAlph()}`);

