<div>
    <script type="text/javascript" src="../js/im-js.js"></script>
    <div class="ImCallback">
        <p class="ImCallback-Title"><?=$_GET['zag1'];?></p>
        <p class="ImCallback-Subtitle"><?=$_GET['zag2'];?></p>
        <form class="ImCallback-Form Form" id="form10" data-reachgoal="<?=$_GET['reachgoal'];?>">
            <div class="Form-Row">
                <div class="Input Input_bgWhite">
                    <input
                            placeholder="Введите ваше имя"
                            name="name"
                            class="Input-Control"
                            data-validator="letters"
                            data-required
                    />
                </div>
            </div>
            <div class="Form-Row">
                <div class="Input Input_bgWhite">
                    <input
                            type="tel"
                            placeholder="Введите телефон"
                            name="phone"
                            class="Input-Control MaskedPhone1"
                            data-validator="regexp"
                            data-validator-pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                            data-required
                    />
                </div>
            </div>
            <div class="Form-Row">
                <input name="head_mess" type="hidden" value="<?=$_GET['headmess'];?>">
                <input name="page_id" type="hidden" value="<?=$_GET['page_id'];?>">
                <button class="Btn Form-Btn">
                    <?=$_GET['btn_text'];?>
                </button>
            </div>
        </form>
        <div class='ImCallback-ProcessingPersonalDataText ProcessingPersonalDataText'>
            Заполняя эту форму, вы даете согласие на<br>
            <a
                    data-fancybox
                    data-type="ajax"
                    data-src="/im-blocks/politic.php"
                    href="javascript:;"
                    class="ProcessingPersonalDataText-Link fancybox.ajax">
                обработку ваших персональных данных
            </a>
        </div>
    </div>
</div>