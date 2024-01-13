// Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, як відбувається перетворення в кожному прикладі:
// 'number' + 3 + 3
console.log('number' + 3 + 3) // отримуємо стрінгу "number33" через конкатенацію 

// null + 3
console.log(null + 3) // отримуємо число 3, бо null приводиться до 0, а 0+3=3

// 5 && "qwerty"
console.log(5 && "qwerty") // отримуємо стрінгу "qwerty", бо оператор '&&' переводить операнди до булевих значень і якщо всі були правдиві, то повертає останній операнд

// +'40' + +'2' + "hillel";
console.log(+'40' + +'2' + "hillel") // отримуємо стрінгу "42hillel". Унарний '+' завжди призводить до числа, тобто 40 + 2 + стрінга "hillel", отримуємо стрінгу через конкатенацію

// '10' - 5 === 6;
console.log('10' - 5 === 6) // отримуємо false. Стрінга "10" приводиться до числа 10, потім вираховується значення (10-5=5)б строгим оператором порівняння порівнюємо 5 і 6, отримуємо фолс

// true + false
console.log(true + false) // отримуємо 1, бо логічні значення true і false приводяться до чисел 1 (тру) і 0 (фолс). 1+0 = 1

// '4px' - 3
console.log('4px' - 3) // отримуємо NaN, бо не можемо конвертувати стрінгу з буквами в число. Якщо значення в строці було тільки діджити - отримали б 1

// '4' - 3
console.log('4' - 3) // а тут конвертуємо стрінгу в намбер і отримуємо 1

// '6' + 3 ** 0;
console.log('6' + 3 ** 0) // отримуємо стрінгу "61". Спочатку 3 взводиться до 0 ступеню, отримуємо 1. Через конкатинацію "6" + 1 = "61"

// 12 / '6'
console.log(12 / '6') // отримуємо 2. Стрінга "6" переводиться в число 6, 12 ділимо на 6 отримуємо 2

// '10' + (5 === 6);
console.log('10' + (5 === 6)) // отримуємо стрінгу "10false". Спочатку виконуємо дію в дужках, 5 не дорівнює 6, отримуємо false. "10" конкатенується з false, отримуємо "10false"

// null == ''
console.log(null == '') // отримуємо false, через різні типи данних (і неможливість приведення їх до спільного типу)

// 3 ** (9 / 3);
console.log(3 ** (9 / 3)) // отримуємо 9 поділити на 3 = 3, 3 в третьому ступені дорівнює 27

// !!'false' == !!'true'
console.log(!!'false' == !!'true') // отримуємо true, бо  стрінга конвертуються в логічне значення true, порівнюємо булеві тру і тру, отримуємо тру

// 0 || '0' && 1
console.log(0 || '0' && 1) // отримуємо 1. '&&' виконується перед '||', а оператор '&&' повертає перше неправдиве значення, якщо всі значення були правдиві - віддає останнє (тому '0' && 1 отримуємо 1). Оператор '||' повертає перше правдиве значення і так як 0 - фолсі значення, отримуємо 1

// (+null == false) < 1;
console.log((+null == false) < 1) // отримуємо false. +null переводить його в число 0. 0 == false (false == false, що дорівнює true). Потім true конвертується в 1, отримуємо 1 < 1, що не є правдою

// false && true || true
console.log(false && true || true) // отримуємо true.'&&' виконується перед '||', оператор '&&' повертає перше неправдиве значення, а оператор '||' повертає перше правдиве значення

// false && (false || true);
console.log(false && (false || true)) // отримуємо false. Спочатку умова в дужках, оператор '||' повертає перше правдиве значення = true. Оператор '&&' повертає перше неправдиве значення = false

// (+null == false) < 1 ** 5;
console.log((+null == false) < 1 ** 5) // отримуємо . +null конвертується в число = 0. 0 приводиться до false, тому false = false отримуємо true. 1 в п'ятій ступені = 1. true приводиться до 1. 1 < 1 = false