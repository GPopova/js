//Подключение с jQuery.noConflict()

// $.noConflict();
// jQuery( document ).ready(function( $ ) {
//     // Code that uses jQuery's $ can follow here.
// });
// // Code that uses other library's $ can follow here.


$(document).ready(function() {

    var $divs = $('div');
    $divs.css({
        "background-color": "green",
        border : "2px solid black"
    }).addClass("jquery");

    $divs.each(function(index, element) {
        console.log(element.innerHTML);
    });

    //Навигационные свойства

    var $firstDiv = $divs.first();
    console.log($firstDiv.find('h1'));
    console.log($firstDiv.parent());
    console.log($firstDiv.children());
    console.log($firstDiv.prev());
    console.log($firstDiv.next());

    //События
    $('.container2').on("input change",
        "input[type='text']",
        function() {alert("My parameter")},
        eventHandler
    );

    $('.container2').one("click",
        "input[type='text']",
        function() {alert("Click")},
        eventHandler
    );

    $('.container').click(function() {
        var $container = $(this);
        $container.fadeOut(2000);
        setTimeout(function() {
            $container.fadeIn(2000);
        }, 1000);
    });

    $('section').click(animateSlide);

    $('.container2').off("input",
        "input[type='text']",
        eventHandler
    );

    //Вставка - удаление
    $divs.last().after('<input type="text" value="After">');
    $('<input type="text" value="Prepend">').prependTo($divs.last());
    $divs.last().append('<input type="text" value="Append">');
    $divs.last().before('<input type="text" value="Before">');

    $divs.eq(1).remove();
    $("body").append($divs.eq(1));

    console.log($('h1[data-id]').data());
});

function eventHandler(e) {
    console.log(e.type);
    e.data();
}

function animateSlide() {
    var $container = $(this);
    $container.slideUp(2000);
    setTimeout(function() {
        $container.slideDown(2000);
    }, 1000);
}