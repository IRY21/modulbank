function errorinput(id)
{
    var ccolor = $('#'+id).css('background-color');
    $('#'+id).css({'background-color' : '#fed1dd'});
    $('#'+id).focus();

    setTimeout(function(){
        $('#'+id).css({'background-color' : ccolor});
    }, 500);
}

function formcheck(id, reachgoal)
{
    var name=$("#name"+id).val();
    var phone=$("#phone"+id).val();
    var email=$("#email"+id).val();

    var city=$("#city"+id).val();
    var street=$("#street"+id).val();
    var flat=$("#flat"+id).val();
    var lift=$("#lift"+id).val();
    var appealType=$("#appeal-type"+id).val();
    var breakType=$("#break-type"+id).val();
    var appealText=$("#appeal-text"+id).val();

    var head_mess=$("#head_mess"+id).val();
    var btn=$(".form-section__btn");

    if(btn.hasClass("notactive"))
    {
        return 0;
    }
    if(name == '')
    {
        errorinput("name"+id);
        return 0;
    }
    if(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone)==0)
    {
        errorinput("phone"+id);
        return 0;
    }

    var formRazreshit = 1;
    //yaCounter33093903.reachGoal(reachgoal);
    btn.disabled = true;
    if(formRazreshit == 1)
    {
        formRazreshit = 0;
        // Если всё ок, отправляем данные
        $.ajax({
                url: "/ok.php",
                type: "POST",
                data: ({head_mess: head_mess, name : name, phone : phone, appealText : appealText, breakType : breakType, appealType : appealType, lift : lift, flat : flat, street : street, city : city, email : email}),
                success: function(html){
                    html = $.trim(html);
                    btn.disabled = true;
                    formRazreshit = 1;
                    console.log('ok');
                    $('.Feedback-Form').html('<div class="FormSuccess">\n' +
                        '                <img src="/img/FormSuccess-Img.png" alt="" class="FormSuccess-Img">\n' +
                        '                <p class="FormSuccess-Title">Ваше обращение отправлено</p>\n' +
                        '                <p class="FormSuccess-Text">\n' +
                        '                    Вы получите ответ по смс и на электронную\n' +
                        '                    почту в течение 24 часов\n' +
                        '                </p>\n' +
                        '            </div>');
                    console.log('ok1');
                }
            }
        );
    }

    return false;
}