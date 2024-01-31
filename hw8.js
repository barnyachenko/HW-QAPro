// ДЗ1 Тасувати масив 
// Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!
// Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
// Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr){
    var length = arr.length;
    for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * length);
        var tempValue = arr[i]
        arr[i] = arr[randomIndex]
        arr[randomIndex] = tempValue
    }
}

myBlend(arr)
console.log(arr)

// ДЗ2 BigBoss
// Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. Окрім того, наша компанія продає рішення для організації продажу цих квитків. Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків. Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі
// Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим.
// Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company, callback){
    if (company.name === companyName){
        callback(company)
        return company
    } else if (company.clients){
        for (var i = 0; i < company.clients.length; i++){
            var foundCompany = findValueByKey(companyName, company.clients[i], callback)
            if (foundCompany) {
                return foundCompany
            }
        }
    } else if (company.partners){
        for (var j = 0; j < company.partners.length; j++){
            var foundPartner = findValueByKey(companyName, company.partners[j], callback)
            if (foundPartner) {
                return foundPartner
            }
        }
    }
}

function processCompanyInfo(foundEntity){
    if (foundEntity){
        console.log("Інформація про компанію: ", foundEntity)
    }
}

findValueByKey('Клієнт 1.2.3', company, processCompanyInfo)