/*
  Написать функцию get, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить форму состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
  Name Score
  имя  кол-во очков 
  имя  кол-во очков 
*/

const getBtn = document.querySelector("#js-get");
const result = document.querySelector(".result");
const apiUrl = "http://fecore.net.ua/rest/";

getBtn.addEventListener("click", get);


function get(evt) {
        evt.preventDefault();
        let apiUrlRequest = `${apiUrl}`;
  fetch(apiUrlRequest)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error fetching data");
    })

    .then(response => {
      console.log(response);
      let HTML = `<form><table border=1><tr><th>Name</th><th>Score</th>`;
      response.map(row => {
        HTML += `<tr>`;
        HTML += `<td>${row.name}</td><td>${row.score}</td>`;
        HTML += `</tr>`;
      });
      result.innerHTML += `${HTML}</table></form>`;
  })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error getting data`;
    })
    
}