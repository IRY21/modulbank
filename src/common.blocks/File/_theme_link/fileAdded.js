(function () {
    function fileAdded() {
        //console.log(this);
        this.parentNode.classList.add('attached');
    }

    $(document).ready(function(){
        var inputFiles = document.querySelectorAll('.File_theme_link input[type="file"]');

        if (inputFiles.length) {
            inputFiles.forEach(function (item) {
                //console.log(item);
                item.addEventListener('change', fileAdded);
            })
        }
    });
})();