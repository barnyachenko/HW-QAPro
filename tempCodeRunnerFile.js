const prompt = require("prompt-sync")({ sigint: true});

var userInput = prompt("Input your age: ");
const lastChar = userInput.toString().slice(-1)
const twoLastChars = userInput.toString().slice(-2) 
if (userInput <= 0){
    console.log("Please, enter a valid age")
} else if (isNaN(userInput)){
    console.log("Please, use digits only")
} else if (lastChar == 0 || lastChar == 5 || lastChar == 6 || lastChar == 7 || lastChar == 8 || lastChar == 9) {
    console.log(userInput + " років")
} else if (lastChar == 1) {
    console.log(userInput + " рік")
} else if (lastChar == 2 || lastChar == 3 || lastChar == 4) {
    console.log(userInput + " роки")
}