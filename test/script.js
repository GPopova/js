//генерация случайных чисел от min до max
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var testArr = [],
    testLength = 10;

for (var i = 0; i < testLength; i++)
    testArr.push(randomNumbers(0, 10));

console.log(testArr);

//пример сортировки
function compare(a, b) {
    return b - a;
}
testArr.sort(compare);

//Перебирающие методы массива

//forEach - вывод элементов на экран
testArr.forEach(function(item, i, arr) {
    console.log("Элемент номер " + i + " значение: "
        + item + ". Массив: " + arr);
});

//filter - выбор только четных элементов
var evenArr = testArr.filter(function(item) {
    return item % 2 === 0;
});
console.log(evenArr);

//тоже самое через for
// var evenArr = [];
// for (i = 0; i < testArr.length; i++)
//     if (testArr[i] % 2 === 0)
//         evenArr.push(testArr[i]);

//map - преобразование всех элементов массива
var squareArr = testArr.map(function (item) {
    return item * item;
});
console.log(evenArr);

//every - проверка все ли элементы четные
var isEven = testArr.every(function(item) {
    return item % 2 === 0;
});
console.log(isEven);

//reduce - подсчет суммы всех элементов
var sum = testArr.reduce(function(prevValue, currentValue) {
    return prevValue * currentValue;
}, 1);
console.log(sum);



