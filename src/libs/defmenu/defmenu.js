
function DefMenu(options) {
    if (!options) return;

    this._state = 0;
    var self = this;

    this._menuClass = options.menu || false;
    this._btnName = options.btn || false;

    this._links = options.links || false;
    this._build = options.build || false;

    this._btn = document.querySelector(this._btnName);
    this._menuContainer = document.querySelector(this.MENUCONTAINERNAME);

    if(this._build || !this._menuClass) this._createNav(this._menuClass);
    if(this._links) this._createLinks(this._links);

    this._btn.addEventListener('click', function () {
        self.run();
    });

    document.addEventListener('click', function (evt) {
        var target = evt.target;

        while(target != this){
            if (target == self._menuContainer){
                self.close();
                return;
            }
            if (target == self._btn){
                return;
            }
            target = target.parentNode;
        }
    });
    document.addEventListener('touchstart', function (evt) {
        var target = evt.target;

        while(target != this){
            if (target == self._menuContainer){
                self.close();
                return;
            }
            if (target == self._btn){
                return;
            }
            target = target.parentNode;
        }
    });

}

DefMenu.prototype.MENUCONTAINERNAME = ".DefmenuContainer";
DefMenu.prototype.MENUWRAPPERNAME = ".DefmenuWrapper";

DefMenu.prototype._createNav = function (menuName) {
    var menu, div, ul;

    menu = document.querySelector(menuName);

    if (!menu) {
        menu = document.createElement("div");
        menu.className = "Defmenu";
        var navParent = document.querySelector(this.MENUWRAPPERNAME) || document.body;
        navParent.appendChild(menu);
    }

    menu.classList.add("Defmenu");

    div = document.createElement("div");
    div.className = "DefmenuContent";

    ul = document.createElement("ul");
    ul.className = "DefmenuNav";

    div.appendChild(ul);

    menu.appendChild(div);

    if (!this._links) this._createLinks("auto");
};
DefMenu.prototype._createLinks =  function (createState) {
    var parent = document.querySelector(".DefmenuNav");
    var anchorBlocks = document.querySelectorAll("*[data-defanchor]");

    switch (createState){
        case "auto":
            var anchor, text, li, a, navElems;
            for (var i = 0; i < anchorBlocks.length; i++){
                anchor = anchorBlocks[i].getAttribute("id");
                text = anchorBlocks[i].getAttribute("data-defanchor");
                li = document.createElement("li");
                a = document.createElement("a");
                a.className = "DefmenuNav-Link";

                if (anchor.indexOf('/') === 0) {
                    a.href = anchor;
                } else {
                    a.href = "#" + anchor;
                }
                a.innerHTML = text;
                li.appendChild(a);
                parent.appendChild(li);
            }
            break;
    }
};
DefMenu.prototype.open = function () {
    this._btn.classList.remove("DefmenuBtn_closed");
    this._btn.classList.add("DefmenuBtn_open");
    document.body.classList.add("Defmenu_open");
    this._state = 1;
};
DefMenu.prototype.close =  function () {
    this._btn.classList.remove("DefmenuBtn_open");
    this._btn.classList.add("DefmenuBtn_closed");
    document.body.classList.remove("Defmenu_open");
    this._state = 0;
}
DefMenu.prototype.run =  function () {
    if(this._state == 0){
        this.open();
    }else{
        this.close();
    }
};