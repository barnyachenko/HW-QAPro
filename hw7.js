// ДЗ1
// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 
// Наприклад так:
// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
// Умови виконання ДЗ
// Не використовувати функції або інші матеріали які ми не вивчали
// Не використовувати методи keys, values, entries

var cat = {
    breed: "mongrel",
    name: "Fruzia",
    age: 9,
    getInfo: function (){
        for (let property in this){
            if (this[property] !== undefined && typeof this[property] !== 'function'){
                console.log(property + ": " + this[property])
            }
        }
    }
}

cat.getInfo();
cat.sex = "female";
cat.getInfo();

// ДЗ2 Сума вартості послуг
//  Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
// var services = {
// 	"стрижка": "60 грн",
// 	"гоління": "80 грн",
// 	"Миття голови": "100 грн"
// };
// "Послуги" можуть додаватися по ходу роботи:
// services['Розбити скло'] = "200 грн";
// Умови виконання ДЗ
// створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
// створити метод minPrice() - який повертає мінімальний price
// створити метод maxPrice() - який повертає максимальний price

var services = {
	"Манікюр": "700 грн",
	"Педікюр": "900 грн",
	"Стрижка": "600 грн",

    price: function () {
        let total = 0
        for (let service in this){
            if (typeof this[service] === "string"){
                const price = parseInt(this[service])
                if (!isNaN(price)){
                    total += price
                }
            }
        }
        return total + " грн"
    },

    minPrice: function (){
        let min = Infinity
        for (let service in this){
            if (typeof this[service] === "string"){
                const price = parseInt(this[service])
                if (!isNaN(price) && price < min){
                    min = price;
                }
            }
        }
        return min + " грн"
    },

    maxPrice: function(){
        let max = 0
        for (let service in this){
            if (this.hasOwnProperty(service) && typeof this[service] === "string"){
                const price = parseInt(this[service])
                if (!isNaN(price) && price > max){
                    max = price
                }
            }
        }
        return max + " грн"
    }
}

services["Укладка"] = "500 грн"
services["Брови"] = "1000 грн"

console.log("Загальна вартість наданих послуг: " + services.price())
console.log("Мінімальна вартість послуг: " + services.minPrice());
console.log("Максимальна вартість послуг: " + services.maxPrice());