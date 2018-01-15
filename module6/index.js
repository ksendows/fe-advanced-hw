const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: undefined,
    task: [],
    userInput: '',
    userErrors: 0,

    setCharCount: function () {
        let charCountInput;
        while (!this.checkPositiveInteger(this.charCount) && charCountInput !== null) {            
            charCountInput = prompt ('Сколько символов будете набирать?');
            this.charCount = +charCountInput;
        }
        
        return this;
    },

    checkPositiveInteger: (num) => (num>0 && Number.isInteger(num)),

    createTask: function () {
        for (let i = 0; i < this.charCount; i++) {
            this.task.push(this.chars[getRandom(0,this.chars.length)]);
        }
        return this;
    },

    startTask: function () {
        if (this.task.length>0) {
            this.userInput = prompt (`Наберите строку: ${this.task.join('')}`);
            
            let counter = Math.max (this.task.length, this.userInput.length);
            
            for (let i = 0; i < counter; i++) {
                if (this.task[i] !== this.userInput.charAt(i)) {
                    this.userErrors++;
                }
            };

            console.log (`Количество ошибок: ${this.userErrors}`);
            
            if (this.userErrors === 0) {
                alert("Поздравляем! Вы правильно выполнили задание!")
            } else {
                alert(`Количество ошибок: ${this.userErrors}. Желаем успехов в следующем упражнении!`);
            };
        }
        return this;
    },

}

function run () {
    keyTrainer.setCharCount().createTask().startTask(); 
}

run();



