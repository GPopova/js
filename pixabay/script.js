$(document).ready(function() {
    var $container = $('#container');

    $('button').click(function() {
        var ajaxReq = $.ajax({
            method: "GET",
            url: "https://pixabay.com/api/",
            data: {
                key: "2874907-a41dc14b65a232bb76a0d6224",
                q: $('input[name="keyword"]').val()
            },
            dataType: "json"
        });

        ajaxReq.done(function(msg) {
            console.log(msg);
            var pics = msg.hits;
            var html = "";
            for (var i = 0; i < pics.length; i++) {
                $container.append('<img src="'
                    + pics[i].webformatURL + '" alt="">');
            }
        });

        ajaxReq.fail(function(jqXHR, statusFail){
            console.log(statusFail);
        });


    });

});