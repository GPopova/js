/*
1. Создать функцию, которая принимает четырехзначный год,
 возвращает високосный он или нет.
*/

function isLeapYear(year) {
    return (new Date(year, 2, 0).getDate() === 29) ? true : false;
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2019));

/*
 2. Создать функцию, которая принимает строку и подсчитывает
  количество вхождений каждого символа.  Подсчитывать без учета регистра.
*/

function countLetters(str) {
    var counter = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str[i].toLowerCase();
        (counter[letter])? counter[letter] ++ : counter[letter] = 1;
    }
    return counter;
}
console.log(countLetters('Размеры и прокрутка страницы'));

/*
2.1 Сортировка по количеству букв
*/

function sortObject(obj) {
    var arr = [];
    for (var key in obj)
        arr.push([key, obj[key]]);

    arr.sort(function (a, b) {
        if (b[1] === a[1])
            return a[0] > b[0];
        else
            return b[1] - a[1];
    });
    return arr;
}
console.log(sortObject(countLetters('Размеры и прокрутка страницы')));

/*
3. Создать функцию, которая переворачивает число.
*/

function reverse(number) {
    return +String(number).split('').reverse().join('');
}
console.log(reverse(1));
console.log(reverse(12));
console.log(reverse(1234));