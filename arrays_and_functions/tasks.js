/*
1. Сгенерировать массив из 20 случайных чисел от -50 до 50.
Вывести в консоль четные значения из массива в диапазоне от -10 до 10.
Все границы диапазонов - включительно.
*/

var testArray = getRandomArray(-50, 50, 20);
var filteredArray = testArray.filter(function(item) {
    return item >= -10 && item <= 10 && item % 2 === 0;
});

console.log(testArray);
console.log(filteredArray);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(min, max, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(getRandomNumber(min, max));
    }
    return result;
}

/*
2. Написать функцию, которая для чисел от 1 до 30 выводит следующие значения:
если число кратно 3 - возвращает 'A', если 5 - 'B', если и 3 и 5 - 'AB',
если ни 3, ни 5 - возвращает само число.
*/

function transformNumbers() {
    var result;
    for (var i = 1; i <= 30; i++) {
        result = '';
        if (i % 3 === 0)
            result += 'A';
        if (i % 5 === 0)
            result += 'B';
        console.log( (result)? result : i );
    }
}
transformNumbers();

/*
3.  Написать функцию, которая работает с переменным числом аргументов.
Если в функцию передано 2 аргумента - возвращает первый аргумент
 в степени второго; если 3 - возвращает их произведение; если 4 - их сумму.
*/

function variadicFunction() {
    switch (arguments.length) {
        case 2 : return Math.pow(arguments[0], arguments[1]);
        case 3 : return arguments[0] * arguments[1] * arguments[2];
        case 4 : return arguments[0] + arguments[1]
            + arguments[2] + arguments[3];
    }
}
console.log(variadicFunction(2, 3));
console.log(variadicFunction(2, 3, 2));
console.log(variadicFunction(2, 3, 2, 3));