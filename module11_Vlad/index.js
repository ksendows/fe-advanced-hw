// Написать приложение для работы с REST сервисом http://fecore.net.ua/rest/, 
// реализовать следующий функционал:
// функция getUsers должна получать текущий список всех пользователей в БД.

const apiUrl = "https://test-users-api.herokuapp.com/users/";


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
      let HTML = `<form><table border=1><tr><th>ID</th><th>Name</th><th>Age</th>`;
      response.data.map(row => {
        HTML += `<tr>`;
        HTML += `<td>${row.id}</td><td>${row.name}</td><td>${row.age}</td>`;
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
const inputAge = document.querySelector("#input-age");
const addBtn = document.querySelector("#js-add");


addBtn.addEventListener("click", addUser);

function addUser(evt) {
  // debugger;
  evt.preventDefault();
  let apiUrlRequest = `${apiUrl}?name=${inputName.value}&age=${inputAge.value}`;
  let data = {"name": `${inputName.value}`, "age": `${inputAge.value}`};

  fetch(apiUrlRequest, {
    method: "POST", 
    body: JSON.stringify(data),
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }})
    .then(response => {
      if (response.ok) {
      result.innerHTML = `User with name: "${inputName.value}" and age: ${inputAge.value} was added to database`;
      inputName.value = '';
      inputAge.value = ''; 
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
  // debugger;
  evt.preventDefault();
  let apiUrlRequest = `${apiUrl}${inputIdRemove.value}`;
        
  fetch(apiUrlRequest, {
    method: "DELETE",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then(response => {
      if (response.ok) {
        result.innerHTML = `User with id: ${inputIdRemove.value} was deleted`;
        inputIdRemove.value = '';
        return response.json();
      }
      throw new Error("Error deleting data");
    })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error deleting user`;
    }) 
   
}

// функция updateUser должна обновлять данные пользователя по id.

const inputIdUpdate = document.querySelector("#input-id-update");
const inputNameUpdate = document.querySelector("#input-name-update");
const updateAge = document.querySelector("#update-age");
const updateBtn = document.querySelector("#js-update");


updateBtn.addEventListener("click", updateUser);

function updateUser(evt) {
  debugger;
  evt.preventDefault();
  
  let apiUrlRequest = `${apiUrl}${inputIdUpdate.value}`;
  let data = { "name": `${inputNameUpdate.value}`, "age": `${updateAge.value}`};

  fetch(apiUrlRequest, {
    method: "PUT", 
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }})
    .then(response => {
      if (response.ok) {
        result.innerHTML = `User with id: ${inputIdUpdate.value} was updated`;
        inputIdUpdate.value = '';
        inputNameUpdate.value = '';
        updateAge.value = '';
        return response.json();
      }
      throw new Error("Error updating data");
    })

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error updating user`;
    })    
}
