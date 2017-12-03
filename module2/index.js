/*
   Есть три курорта: taba, sharm или hurgada.
   
   Необходимо через prompt попросить ввести число, от 1 до 3-х.
   
   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.
   
   После этого вывести сообщение о том, что пользователь 
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/

let res;

let num = prompt('Введите число от 1 до 3х, при этом 1 соотвествует курорту Taba, 2 - курорту Sharm и 3 - курорту Hurgada', 1);

switch (num) {
  case "1" : res = "Пользователь выбрал курорт Taba!"; break; 
  case "2" : res = "Пользователь выбрал курорт Sharm!"; break;
  case "3" : res = "Пользователь выбрал курорт Hurgada!"; break;
  default  : res = "Введено число, варианта курорта для которого не было.";
}

console.log(res);

/*
  Пользователь через prompt вводит число участников группы. 
  Необходимо проверить является ли введенные данные целым 
  положительным числом. Вывести alert в случае ошибочного ввода.
        
  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6
    
  Если количество мест позволяет, то вывести пользователю 
  сообщение через confirm что есть место в группе такой-то, 
  согласен ли пользоваетель быть в этой группе?
  
  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.
  
  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/


let quantity = prompt('Введите число участников группы', 1);

if (quantity%1 !== 0 || quantity < 0) alert("Ошибка в вводе числа!"); 


let quantitySharm = 15;
let quantityHurgada = 25;
// я поменяла количество в группе Таба, чтобы проверить как работают все ветки
// если поставить количество 6, то можно удалить последних два блока elseif
let quantityTaba = 60;  

let quantitySharmInit = quantitySharm;
let quantityHurgadaInit = quantityHurgada;
let quantityTabaInit = quantityTaba;



if (quantity <= quantitySharm) {
  
  let request = confirm("Есть место в группе Sharm, вы согласны?");
  
  if  (request) {
    quantitySharm = quantitySharm - quantity; 
  
  }     else if (quantity <= quantityHurgada) {
            
            let request = confirm("Есть место в группе Hurgada, вы согласны?");

            if (request) {
              quantityHurgada = quantityHurgada - quantity;  
            }

                else if (quantity <= quantityTaba) {
                
                      let request = confirm("Есть место в группе Taba, вы согласны?");

                      if (request) {
                        quantityTaba = quantityTaba - quantity;  
                      }   
                  }    
    }
}

// если мест в группе Шарм не достаточно
    else if (quantity <= quantityHurgada) {
            
            let request = confirm("Есть место в группе Hurgada, вы согласны?");

            if (request) {
              quantityHurgada = quantityHurgada - quantity;  
            
            }  else if (quantity <= quantityTaba) {
            
                  let request = confirm("Есть место в группе Taba, вы согласны?");

                  if (request) {
                    quantityTaba = quantityTaba - quantity;  
                  }   
              } 
          }


// если мест в группе Хургада не достаточно
    else if (quantity <= quantityTaba) {
            
            let request = confirm("Есть место в группе Taba, вы согласны?");

            if (request) {
              quantityTaba = quantityTaba - quantity;  
            }   
          }

    else {console.log ("Мест нигде нет.")}



console.log (`В группе Sharm было ${quantitySharmInit} мест, осталось ${quantitySharm} мест`);
console.log (`В группе Hurgada было ${quantityHurgadaInit} мест, осталось ${quantityHurgada} мест`); 
console.log (`В группе Taba было ${quantityTabaInit} мест, осталось ${quantityTaba} мест`);  



