var car = {
    model: "Mercedes",
    engine: "V12",
    color: "white",
    volume: 6,
    toString: function() {
       return this.model + " engine: " + this.engine
       + " color: " + this.color;
    },
    valueOf: function() {
        return this.volume;
    }
};

var car2 = {
    model: "BMW",
    engine: "hybrid",
    color: "black",
    volume: 1.4,
    toString: function() {
        return this.model + " engine: " + this.engine
            + " color: " + this.color;
    },
    valueOf: function() {
        return this.volume;
    }
};

var car3 = {
    model: "Audi",
    engine: "W12",
    color: "red",
    volume: 4.2,
    toString: function() {
        return this.model + " engine: " + this.engine
            + " color: " + this.color;
    },
    valueOf: function() {
        return this.volume;
    }
};

function show(obj) {
    document.write(obj);
}

var arr = [car, car2, car3];
arr.forEach(function(item) {
    console.log(item);
});

arr.sort(function (a, b) {
    return a - b;
});

arr.forEach(function(item) {
    console.log(item);
});

