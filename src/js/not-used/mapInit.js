function mapInit(center, iconCoord) {
    ymaps.ready(init1);
    function init1 () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map")
        var myMap = new ymaps.Map('myMap', {
                // При инициализации карты, обязательно нужно указать
                // ее центр и коэффициент масштабирования
                center: center,//[54.712258, 55.987599],
                zoom: 16,
                controls: []
                //type:'yandex#hybrid'
            }),
            //Добавляем элементы управления
            /* myMap.controls
             // Кнопка изменения масштаба
                 .add('zoomControl')
                 // Список типов карты
                 .add('typeSelector', { right: 30, top: 5 })*/
            // Создание метки
            myPlacemark = new ymaps.Placemark(
                // Координаты метки
                iconCoord,{  balloonContentBody: [
                        '<address>',
                        'г.&nbsp;Уфа, ул.&nbsp;Сагита Агиша, д.&nbsp;2Б,\n' +
                        '                            3&nbsp;этаж, офис&nbsp;2',
                        '</address>'
                    ].join('')
                }, {
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    iconImageHref: '/img/map_icon.png',
                    iconImageSize: [30, 50],
                    iconImageOffset: [-18, -45]
                });
        // Добавление метки на карту
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects
            .add(myPlacemark);
    }
}