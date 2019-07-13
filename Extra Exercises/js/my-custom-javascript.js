"use strict";

$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );
    // $('.codeup').css('border', '1px solid red');

    // $('li').css('font-size', '20px');
    // $('h1, p, li').css('background-color', 'thistle');
    // alert($('h1').html());

    $('h1').click(function(){
        $(this).css('background-color', 'lavender');
    });
    $('p').dblclick(function(){
        $(this).css('font-size', '18px');
    });
    $('li').hover(
        function(){
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'black');
        }
    )
});