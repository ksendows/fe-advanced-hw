// Задание 1
// Используя createElement, написать функцию createUserCard() которая динамически создает и возвращает дом узел
 // для такой карточки пользователя. Классы оформления добавляем через classList.

const createElem = (tag, parElem, className, content) => {
    element = document.createElement(tag);
    if (content) {element.textContent = content};
    element.classList.add(className);
    parElem.append(element);

    return element;
}
const createUserCard = (name, surname, age, adress, strawberries, lemons) => {
    
    const container = createElem("div", document.body,"card-container");

        const avatar = createElem('img', container, "avatar");
        avatar.setAttribute("alt", "avatar");
        avatar.setAttribute("src", "avatar.png");

        const cardInfo = createElem('div', container, "info");

            const title = createElem('h1', cardInfo, "title", `${name} ${surname}`);
            const subtitle = createElem('h3', cardInfo, "title", `${age} ${adress}`);


        const marksContainer = createElem('div', cardInfo, "marks-container");
        
            const imageStrawberries = createElem('img', marksContainer);
            imageStrawberries.setAttribute("alt", "strawberry");
            imageStrawberries.setAttribute("src", "strawberry.png");
            
            const marksStrawberries = createElem('div', marksContainer, "marks", strawberries);

            const imageLemons = createElem('img', marksContainer);
            imageLemons.setAttribute("alt", "lemon");
            imageLemons.setAttribute("src", "lemon.png");

            const marksLemons = createElem('div', marksContainer, "marks", lemons);

            const imageHand = createElem('img', marksContainer);
            imageHand.setAttribute("alt", "hand");
            imageHand.setAttribute("src", "hand.png");

}

createUserCard("Claudia", "Cordinale", 29,"Philadelpia, PA", 19, 5);

// Задание 2
// Модифицировать createUserCard() так чтобы она использовала не createElement, а возвращала строку с тегами, 
// которую потом можно будет поставить в документ через innerHTML или insertAdjacentHTML.

const createUserCard1 = (name, surname, age, adress, strawberries, lemons) => {
    res = `<div class="card-container">
                <img src="avatar.png" alt="avatar" class="avatar">  

                <div class="info">
                    <h1 class="title">${name} ${surname}</h1>
                    <h3 class="title">${age} ${adress}</h3>
                    <div class="marks-container">
                        <img src="strawberry.png" alt="strawberry"> 
                        <div class="marks">${strawberries}</div>
                        <img src="lemon.png" alt="lemon">
                        <div class="marks">${lemons}</div>
                        <img src="hand.png" alt="hand">
                    </div>   
                </div>
            </div>`;
    return res;   
}

document.body.innerHTML += createUserCard1("Paola","Pavarotti", 29, "Philadelpia, PA", 19, 5);


// Задание 3
// Модифицировать createUserCard(user) так чтобы она принимала объект с данными для заполнения полей в карточке. 
// Используя createUserCard создать карточки для 3-х разных пользователей и повесить их в документ. Формат обьекта 
// указан ниже.

const user1 = {
  img: 'avatar.png',
  name: 'Claudia',
  surname: 'Cardinale',
  age: 29,
  location: 'Philadelphia, PA',
  strawberries: 19,
  lemons: 5
};
const user2 = {
  img: 'avatar.png',
  name: 'Anna',
  surname: 'Ferrari',
  age: 29,
  location: 'Philadelphia, PA',
  strawberries: 19,
  lemons: 5
};
const user3 = {
  img: 'avatar.png',
  name: 'Claudia',
  surname: 'Marconi',
  age: 29,
  location: 'Philadelphia, PA',
  strawberries: 19,
  lemons: 5
};

const createUserCard2 = function () {
    res = `<div class="card-container">
                <img src=${this.img} alt="avatar" class="avatar">  

                <div class="info">
                    <h1 class="title">${this.name} ${this.surname}</h1>
                    <h3 class="title">${this.age} ${this.location}</h3>
                    <div class="marks-container">
                        <img src="strawberry.png" alt="strawberry"> 
                        <div class="marks">${this.strawberries}</div>
                        <img src="lemon.png" alt="lemon">
                        <div class="marks">${this.lemons}</div>
                        <img src="hand.png" alt="hand">
                    </div>   
                </div>
            </div>`;
    return res;   
}

document.body.innerHTML += createUserCard2.call(user1);
document.body.innerHTML += createUserCard2.call(user2);
document.body.innerHTML += createUserCard2.call(user3);

