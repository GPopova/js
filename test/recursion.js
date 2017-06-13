
function factorial(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(number) {
    if (number === 1)
        return 1;
    else
        return factorialRecursive(number - 1) * number;
}

console.log(factorial(5));
console.log(factorialRecursive(5));