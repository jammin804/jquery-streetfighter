$(document).ready(function() {
    $(".ryu").mouseenter(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });
    $(".ryu").mouseleave(function () {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    });
    $(".ryu").mousedown(function () {
        playHadouken();
        //Play hadouken sound
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1041px'}, 500,
            function(){
                $(this).css('left', '541px');
                $(this).hide();
            });
        //show hadouken and animate it  to the right of the screen
    });
    $(".ryu").mouseup(function () {
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
        //ryu goes back to his ready position
    });
    $("html").keydown(function(e){
        //On button down change still ryu to cool ryu
        if(e.which == 88){
            $('.ryu-still').hide();
            $('.ryu-cool').show();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
        }
    });
    $("html").keyup(function(e){
        //On button up change cool ryu to still ryu
        if(e.which == 88){
            $('.ryu-still').show();
            $('.ryu-cool').hide();
        }
    });
});

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}