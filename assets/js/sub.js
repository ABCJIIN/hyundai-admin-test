$(document).ready(function(){
    $("#header").load("../../../html/include/header.html");
});


$(function(){
    $('#hero').show();
    $('#banner').hide();
    $('#heroBtn').click(function(){
        $('#hero').show();
        $('#banner').hide();
        $('#heroBtn').addClass('select').removeClass('non-select');
        $('#bannerBtn').addClass('non-select').removeClass('select');
    });
});

$(function(){
    $('#bannerBtn').click(function(){
        $('#banner').show();
        $('#heroBtn').addClass('non-select').removeClass('select');
        $('#bannerBtn').addClass('select').removeClass('non-select');
        $('#hero').hide();
    });
});
