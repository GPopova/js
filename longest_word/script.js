"use strict";

//Поиск самого длинного слова в строке, разделенной пробелами

var str ="Далее в этой главе мы говорим о возможностях и JavaScript именно в контексте браузера";


//1. Вариант перебора строки посимвольно
function findLongestWord(str) {
    var longestWord = 0,
        counter = 0,
        firstLetter = 0,
        i = 0,
        lastLetter = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' ')
            counter += 1;

        lastLetter = (i === str.length - 1)? 1 : 0;

        if (str[i] === ' ' || lastLetter) {
            if (counter > longestWord) {
                longestWord = counter;
                firstLetter = i - counter + lastLetter;
            }
            counter = 0;
        }
    }

    return str.substr(firstLetter, longestWord);
}

console.log(findLongestWord(str));


//2 Обычный способ - через преобразование строка - массив
function findLongestWord2(str) {
    var arr = str.split(' '),
        word = '';

    for (var i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length)
            word = arr[i];
    }

    return word;
}

console.log(findLongestWord2(str));

//3 При помощи arr.sort()
function findLongestWord3(str) {
    var arr = str.split(' ');

    arr.sort(sortByLength);

    return arr[0];
}

function sortByLength(a, b) {
    return b.length - a.length;
}

console.log(findLongestWord3(str));