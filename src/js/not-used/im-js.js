$(document).ready(function(){

    $(".MaskedPhone1").inputmask("8 (999) 999-99-99",{
        "oncomplete": function(){ phonemaskOk = 1; },
        "onincomplete": function(){ phonemaskOk = 0; },
        "oncleared": function(){ phonemaskOk = 0; }
    });

    $(".ProcessingPersonalDataText-Link").fancybox({
        maxWidth : 700
    });

    validateForm({
        formId: 'form10'
    });
});