/*
  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.
  
  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/
const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");

const apiUrl = "http://fecore.net.ua/rest/";

postBtn.addEventListener("click", post);


function post(evt) {
        evt.preventDefault();
        let apiUrlRequest = `${apiUrl}`;
  fetch(apiUrlRequest, {method: "POST"})
    .then(response => {
      if (response.ok) {
      result.innerHTML += `OK`;
        return response.json();
      }
      throw new Error("Error posting data");
    })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error`;
    })
    
}