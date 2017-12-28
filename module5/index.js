const ALPHABET_EN = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const ALPHABET_RU = "йцукенгшщзхъфывапролджэячсмитьбю.";
const ALPHABET_UA = "йцукенгшщзхїфівапролджєячсмитьбю/";


const addKeyboardLayout = (alphabet) => {

    let keyboard = {
        topRow: [],
        middleRow: [],
        bottomRow: []
    };
    let alphabetArray = alphabet.split("");

    alphabetArray.forEach(function(item, i) {
        if (i<12) {keyboard.topRow[i] = item}
        else if (i<23) {keyboard.middleRow[i-12] = item}
        else {keyboard.bottomRow[i-23] = item}
    });

    return keyboard;
};


const keyboard = {
    layouts: {
        en: addKeyboardLayout(ALPHABET_EN),
        ru: addKeyboardLayout(ALPHABET_RU),
        ua: addKeyboardLayout(ALPHABET_UA)
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

let languageSelect;
while (languageSelect !== "0" && languageSelect != "1" && languageSelect != "2" && languageSelect !== null) {
    languageSelect = prompt("Выберите, пожалуйста, язык (en-0, ru-1, ua-2):")
    if (languageSelect !== "0" && languageSelect != "1" && languageSelect != "2" && languageSelect !== null) {
        alert ("Был выбран не правильный язык, повторите попытку");
    };
}

switch (languageSelect) {
    case "0":
        keyboard.currentLang = "en";
        break;
    case "1":
        keyboard.currentLang = "ru";
        break;
    case "2":
        keyboard.currentLang = "ua";
}

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;


// Первый способ - функция getRandCharInAlph

let randomRow = getRandom  (0, 3);
switch (randomRow) {
    case 0:
        randomRow = "topRow";
        break;
    case 1:
        randomRow = "middleRow";
        break;
    case 2:
        randomRow = "bottomRow";
        break;
};

const getRandCharInAlph = (language) =>
keyboard.layouts[language][randomRow][getRandom(0,keyboard.layouts[language][randomRow].length)];


// Второй способ - функция getRandCharInAlph1

const getRandCharInAlph1 = (language) => {
    switch (language) {
        case "en":
            alphabet = ALPHABET_EN;
            break;
        case "ru":
            alphabet = ALPHABET_RU;
            break;
        case "ua":
            alphabet = ALPHABET_UA;
            break;
    }
    return alphabet.charAt(getRandom(0,alphabet.length));
}

if (languageSelect) {
    console.log (`Случайная буква (первый способ - функция getRandCharInAlph): ${getRandCharInAlph(keyboard.currentLang)}`);
    console.log (`Случайная буква (второй способ - функция getRandCharInAlph1): ${getRandCharInAlph1(keyboard.currentLang)}`);
}

