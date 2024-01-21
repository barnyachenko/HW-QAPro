// ДЗ 1
// Написати свою реалізацію функції isNaN. 
// Умови виконання ДЗ
// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
// Не використовувати isNaN/ Number.isNaN

let value = "abc"; 
function myIsNaN(value){
    return value !== value;
}
console.log(myIsNaN(value));

// ДЗ 2
// Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Параметр count буде вказувати скільки разів буде генеруватися випадкове число.
// Умови виконання ДЗ
// Функція виводить інформацію
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних: 
// Не використовувати функції або інші матеріали які ми не вивчали

let oddNumber = 0;
let evenNumber = 0;
let count = 10;

function checkProbabilityTheory(count){
    for (let i = 0; i < count; i++){
        const randomNumber = Math.floor(Math.random() * (1001 - 100) + 100);
        if (randomNumber % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
    const evenPercentage = (evenNumber / count) * 100;
    const oddPercentage = (oddNumber / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Кількість парних чисел: ${evenNumber}`);
    console.log(`Кількість непарних чисел: ${oddNumber}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}
checkProbabilityTheory(count);

// ДЗ 3 **
// Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, 8, true), яка приймає чотири аргументи:
// рядок, до якого буде додаватися символ.
// символ, який буде додаватися.
// Скільки додавати символів
// булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
// Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте значення 6, то додаєте тільки один символ
// Умови виконання ДЗ
// Функція повинна повертати новий рядок
// Не використовувати функції або інші матеріали які ми не вивчали
