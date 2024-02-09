// ДЗ 1 Без Аа
// Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)

myVariables = ['bCDEFG', 'Abcd5!@#', 'qwertya', '123!$', 'qwerty']
myRegex = /^[^Aa]{6,}$/
myVariables.forEach(str => {
    if (myRegex.test(str)){
        console.log(`${str} відповідає умовам`)
    } else{
        console.log(`${str} не відповідає умовам`)
    }
})

// ДЗ 2 Параноя
// В нас є масив об'єктів в яких міститься email.
// У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
// За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
// - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Veronika",
        lastName:"Test",
        email:"veronika9.bar@gmail.com"
    },
];

var trustedEmails = []
var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/
for (var i = 0; i < arr.length; i++){
    if (emailRegex.test(arr[i].email)){
        trustedEmails.push(arr[i].email)
    }
}

console.log(trustedEmails)