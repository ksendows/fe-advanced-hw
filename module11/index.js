// Написать приложение для работы с REST сервисом http://fecore.net.ua/rest/, 
// реализовать следующий функционал:
// функция getUsers должна получать текущий список всех пользователей в БД.

const apiUrl = "http://fecore.net.ua/rest/";

const result = document.querySelector(".result");

const getBtn = document.querySelector("#js-get");

getBtn.addEventListener("click", getUsers);


function getUsers(evt) {
  // debugger;
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
      let HTML = `<form><table border=1><tr><th>ID</th><th>Name</th><th>Score</th>`;
      response.map(row => {
        HTML += `<tr>`;
        HTML += `<td>${row.id}</td><td>${row.name}</td><td>${row.score}</td>`;
        HTML += `</tr>`;
      });
      result.innerHTML = `${HTML}</table></form>`;
  })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error getting data`;
    })    
}

// функция addUser должна записывать в БД юзера с полями name и score.

const inputName = document.querySelector("#input-name");
const inputScore = document.querySelector("#input-score");
const addBtn = document.querySelector("#js-add");


addBtn.addEventListener("click", addUser);

function addUser(evt) {
  // debugger;
  evt.preventDefault();
  let apiUrlRequest = `${apiUrl}?action=1&name=${inputName.value}&score=${inputScore.value}`;
  let data = {"name": `${inputName.value}`, "score": `${inputScore.value}`};

  fetch(apiUrlRequest, {method: "POST", body: JSON.stringify(data)})
    .then(response => {
      if (response.ok) {
      result.innerHTML = `User with name: "${inputName.value}" and score: ${inputScore.value} was added to database`;
      inputName.value = '';
      inputScore.value = ''; 
      return response.json();
      }
      throw new Error("Error adding data");
    })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error adding user`;
    }) 
  
}

// функция removeUser должна удалять из БД юзера по id.

const inputIdRemove = document.querySelector("#input-id-remove");
const removeBtn = document.querySelector("#js-remove");


removeBtn.addEventListener("click", removeUser);

function removeUser(evt) {

  evt.preventDefault();
  let apiUrlRequest = `${apiUrl}?action=3&id=${inputIdRemove.value}`;
        
  fetch(apiUrlRequest, {method: "DELETE"})
    .then(response => {
      console.log(response);
      if (response.ok) {
      result.innerHTML = `User with id: ${inputName.value} was deleted`;
        return response.json();
      }
      throw new Error("Error deleting data");
    })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error deleting user`;
    }) 
  inputIdRemove.value = '';   
}

// функция updateUser должна обновлять данные пользователя по id.

const inputIdUpdate = document.querySelector("#input-id-update");
const inputNameUpdate = document.querySelector("#input-name-update");
const updateScore = document.querySelector("#update-score");
const updateBtn = document.querySelector("#js-update");


updateBtn.addEventListener("click", updateUser);

function updateUser(evt) {

  evt.preventDefault();
  // http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 - изменение
  let apiUrlRequest = `${apiUrl}?action=2&id=${inputIdUpdate.value}&name=${inputNameUpdate.value}`;
  let data = {score: `${updateScore.value}`};

  fetch(apiUrlRequest, {method: "PUT", body: JSON.stringify(data)})
    .then(response => {
      if (response.ok) {
        result.innerHTML = `User with id: ${inputNameUpdate.value} was updated`;
        inputIdUpdate.value = '';
        inputNameUpdate.value = '';
        updateScore.value = '';
        return response.json();
      }
      throw new Error("Error updating data");
    })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error updating user`;
    })    
}
