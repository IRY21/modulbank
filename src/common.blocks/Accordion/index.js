(function () {
    var accordionCollection = document.querySelectorAll('.Accordion-Title');

    function accordionHandler() {
       console.log('o');
        this.parentElement.classList.add('Accordion-Item_open');
    }

    accordionCollection.forEach(function (item) {
        item.addEventListener('click', accordionHandler);
    });

})();
