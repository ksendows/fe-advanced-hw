const row1 = "qwertyuiop[]"
const row2 = "asdfghjkl;'"
const row3 = "zxcvbnm,./"

const row1Length = row1.length;
const row2Length = row2.length;
const row3Length = row3.length;




document.write (`Длина первой строки: ${row1Length}, первый символ - ${row1.charAt(0)}, последний - ${row1.charAt(row1Length-1)} <br/>`);
document.write (`Длина второй строки: ${row2Length}, первый символ - ${row2.charAt(0)}, последний - ${row2.charAt(row2Length-1)} <br/>`);
document.write (`Длина третьей строки: ${row3Length}, первый символ - ${row3.charAt(0)}, последний - ${row3.charAt(row3Length-1)} <br/>`);


var charPosition1 = row1.indexOf("[");
var charPosition2 = row1.indexOf("]");

document.write (`Позиция символа (начиная с нуля) "[" - ${charPosition1}, позиция символа "]" - ${charPosition2}`);





 /* Задание 1

  Есть две переменые a и b содержащие цифры 5 и 10,
  и переменная result в которую надо записать результат 
  математических операций над a и b.
  Используя синтаксис языка, последовательно присвоить 
  в result результат выполнения мат операций над a и b
  так, чтобы в консоли результат совпадал с комментарием 
  напротив console.log()
*/

const a = 6;
const b = 10;
let result;

result = a + b;
console.log(result); // -> 16

result = b - a - b;
console.log(result); // -6

result = a * b;
console.log(result); // 60

result = a / b;
console.log(result); // 0.6

result = b % a;
// использовать %
console.log(result); // 4


/* Задание 2

  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку формата: день/месяц/год  
  в виде xx/xx/xxxx
  PS - обратите внимние на необходимость двух цифр 
  для даты и месяца.
  Найдите ошибку в коде, результат будет выведен 
  в консоли и равен комментарию напротив console.log
*/

const day = 02;
const month = 10;
const year = 2017;

const date = `${day}/${month}/${year}`;


console.log(date); // "02/10/2017"




/* Задание 3

   Надо расскомментировать строку #14.
   Ввести любой текст. 
   Этот текст будет присвоен переменной message.
   Затем для переменной inLowerCase надо присвоить
   результат вызова метода обработки строки message так,
   чтобы все символы строки были в нижнем регистре.
   Для переменной inUpperCase - в верхнем регистре.
   Если все будет сделано верно, то в консоле 
   будет выведен текст:
   success: in all lowercase
   success: in all uppercase
*/

const message = prompt("Enter any message:", "");

// здесь заменить 'str' и 'STR' на message и вызов метода
let inLowerCase = message.toLowerCase(); // -> "success: in all lowercase"
let inUpperCase = message.toUpperCase(); // -> "success: in all uppercase"

console.log(inLowerCase); 
console.log(inUpperCase);

console.log(checkCase(inLowerCase)); // success: in all lowercase
console.log(checkCase(inUpperCase)); // success: in all uppercase



//============= Функция для проверки кода ================= //
function checkCase(str) {
  if (str && str === str.toLowerCase()) {
    return "success: in all lowercase";
  } else if (str && str === str.toUpperCase()) {
    return "success: in all uppercase";
  }
  return "error: not in all lowercase or uppercase";
}
//============= end Функция для проверки кода ============== //



/* Задание 4

  Есть две переменные, name и typingSpeed
  содержащие имя пользователя и скорость печати,
  кол-во знаков в минуту. 
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя пользователя" печатает со скоростью "скорость печати" знаков в минуту.
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная 
  той что напротив console.log
*/

const name = 'Mango';
const typingSpeed = 50;

const message1 = (`${name} печатает со скоростью ${typingSpeed} знаков в минуту.`);

console.log(message1); // Mango печатает со скоростью 50 знаков в минуту.



/* Задание 5

  Есть 3 переменные в которых хранится  размер
  составляющих блочной модели в формате Npx,
  где N это целое число.
  
  Используя эти переменные, запишите в 
  переменную totalWidth общую ширину 
  блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px'
  будет равна '50px'.
  
  Если все верно, то в консоли будет
  выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = parseInt(padding)*2 + parseInt(border)*2 + parseInt(contentWidth) + "px";

console.log(totalWidth); // '125px'


/*Задание 6

  Есть 3 переменные в которых хранится  размер
  составляющих блочной модели в формате Npx,
  где N это число с плавающей запятой.
  
  Используя эти переменные, запишите в 
  переменную totalWidth общую ширину 
  блока в формате Npx.
  
  К примеру "сумма" '20.20px' и '30.25px'
  будет равна '50.45px'.
  
  Если все верно, то в консоли будет
  выведена строка '125.85px'
*/

const padding1 = "20.25px";
const border1 = "5.15px";
const contentWidth1 = "100.45px";

let totalWidth1 = parseFloat(padding1)*2 + parseFloat(border1)*2 + parseFloat(contentWidth1) + "px";

console.log(totalWidth1); // '125.85px'




/* Задание 7

  Есть 3 числа с плавающей запятой.
  Необходимо сложить и вывести результат в консоль.
*/

const a1 = 0.1;
const b1 = 0.2;
const c1 = 0.3;

// Исправить вычисления тут
const summ = (a1 * 100 + b1 * 100 + c1 * 100) / 100;

console.log(0.6 === summ); // должно быть true
