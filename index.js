$(document).ready(function() {
    $("#selectCursos").change(function(){
        if ($(this).val()=='si') {
            $('.divSi').show();
            $('.divADS').hide();
        }
       else if($(this).val()=='ads'){
            $('.divADS').show();
            $('.divSi').hide();
        }
     });
});