
function settingsCheckbox() {
    $('.checkbox-switch__input').on('click', function () {
        var state = this.checked;
        var connectAddVal = parseInt(this.dataset.connect.replace(' ', ''));
        var subscriptionAddVal = parseInt(this.dataset.subscription.replace(' ', ''));

        changeIcon(this, state);
        showTotal(connectAddVal, subscriptionAddVal, state);
    });

    function changeIcon(checkbox, state) {
        var mainImg, imgArr = [], imgLink;

        var columnSection = $(checkbox).parent().parent().parent().parent().parent();
        var column = $(checkbox).parent().parent().parent().parent();

        if(columnSection.hasClass('settings-table__column-section')){
            imgArr = columnSection[0].querySelectorAll('.settings-table__column_sub .settings-table__row .settings-table__text_icon img');
            imgArr = Array.from(imgArr);
        }

        mainImg = column.children('.settings-table__row').children('.settings-table__text_icon').children('img');
        if (state) {
            mainImg.attr('src', mainImg.attr('src').replace( new RegExp('.png', 'g'), '__hover' + '.png'));

            imgArr.map(function (img) {
                imgLink = img.src.replace( new RegExp('.png', 'g'), '__hover' + '.png');
                img.src = imgLink;
            });
        } else {
            mainImg.attr('src', mainImg.attr('src').replace( new RegExp('__hover.png', 'g'), '' + '.png'));

            imgArr.map(function (img) {
                imgLink = img.src.replace( new RegExp('__hover.png', 'g'), '' + '.png');
                img.src = imgLink;
            });
        }
    }

    function showTotal(connectAddVal, subscriptionAddVal, state) {
        var connectElem, subscriptionElem, connectSum, subscriptionSum;
        connectElem = document.getElementById('settings-connection-val');
        subscriptionElem = document.getElementById('settings-subscription-val');

        connectSum = parseInt(connectElem.innerText.replace(' ', ''));
        subscriptionSum = parseInt(subscriptionElem.innerText.replace(' ', ''));

        if(state){
            connectElem.innerText = (connectSum + connectAddVal).toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
            subscriptionElem.innerText = (subscriptionSum + subscriptionAddVal).toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
        } else {
            connectElem.innerText = (connectSum - connectAddVal).toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
            subscriptionElem.innerText = (subscriptionSum - subscriptionAddVal).toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
        }
    }
}