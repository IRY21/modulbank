(function () {
    const searchElement = document.querySelector('.Search');
    const searchElementControl = searchElement.querySelector('.Search-Control');

    function searchOpen() {
        searchElement.classList.add('open');
        searchElementControl.focus();
    }
    function searchClose() {
        searchElement.classList.remove('open');
    }

    searchElement.addEventListener('click', searchOpen);

    searchElementControl.addEventListener('blur', searchClose)
})();
//# sourceMappingURL=main.js.map
