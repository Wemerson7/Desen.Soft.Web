//MASCARA DO TELEFONE
$(document).ready(function(){
    $("#Telefone").mask("(00) 00000-0000");
})
//ESCONDER OS PRATOS 1
$(document).ready(function(){
    $("#comidas2").hide();
})
//MOSTRAR OS PRATOS
$(document).ready(function(){
    $("#btnMostrarMais").click(function(){
        $("#comidas2").show("slow");
        $("#btnMostrarMais").hide("slow");
    })
})
//ESCONDER O PRATO MOSTRAR MENOS
$(document).ready(function(){
    $("#btnMostrarMenos").click(function(){
        $("#comidas2").hide("slow");
        $("#btnMostrarMais").show("slow");
    })
})
//widget de Dialogo
$(document).ready(function(){
    $("#fechar").click(function(){
        $("#dialogo1").hide();
    })
})
