let measure = 'кілометри'; // кілометри, години та кілограми
let quantity = 1;

switch (measure) {
    case 'кілометри':
        console.log(quantity + ' км це ' + (quantity * 1000) + ' метрів.');
        break;
    case 'години':
        console.log(quantity + ' год. це ' + (quantity * 60) + ' хвилин.');
        break;
    case 'кілограми':
        console.log(quantity + ' кг це ' + (quantity * 1000) + ' грамів.');
        break;
    default:
        console.log('Будь ласка, введіть: кілометри, години або кілограми');
}