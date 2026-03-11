$(document).ready(function(){

    $("#btnMostrar").click(function(){
        $("#listaFilmes").show();
    });

    $("#btnOcultar").click(function(){
        $("#listaFilmes").hide();
    });

});

$(".filmes").mouseenter(function(){
    $(this).css("background-color","#ffeaa7");
});

$(".filmes").mouseleave(function(){
    $(this).css("background-color","#ffffffff");
});