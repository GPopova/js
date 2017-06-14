//this
var human = {
    name: "John",
    surname: "Dow",
    greet: function() {
        alert("Hi, my name is " + this.name + " " + this.surname);
    }
};

var man = human;
human.name = "Vasja";
man.greet();


//Область видимости переменных
var a = 1;

function f(a) {
    return a++;
}

alert(f(a));
alert(a);