// Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".
// Умови виконання ДЗ
// Рік отримувати через prompt()
// Зробити перевірку що користувач ввів число та це число не є від'ємним
// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки.
// Будь ласка, надайте наступні дані для перевірки вашої роботи:
// Створіть гілку js_homework2.
// Додати туди ваше домашнє завдання
// Вислати вашу гілку

const prompt = require("prompt-sync")({ sigint: true });

var userInput = prompt("Input your age: ");
const lastChar = userInput.toString().slice(-1);
const twoLastChars = userInput.toString().slice(-2);
if (userInput <= 0){
    console.log("Please, enter a valid age")
} else if (isNaN(userInput)){
    console.log("Please, use digits only")
} else if (twoLastChars >= 11 && twoLastChars <= 19){
    console.log(userInput + " років");
} else if (lastChar == 1){
    console.log(userInput + " рік");
} else if (lastChar >= 2 && lastChar <= 4){
    console.log(userInput + " роки");
} else {
    console.log(userInput + " років");
}