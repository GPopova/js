for (var i = 1; i < 10; i++) {
    (function (i) {
        setTimeout(function() {
            console.log(i);
        }, 0);
    })(i);
}