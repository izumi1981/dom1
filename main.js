var DOM = /** @class */ (function () {
    function DOM() {
    }
    DOM.prototype.setBody = function () {
        var div = document.createElement("div");
        div.textContent = "DOMのdivです。";
        document.body.appendChild(div);
        var button = document.createElement("button");
        button.textContent = "DOMのbuttonです";
        document.body.appendChild(button);
        button.addEventListener("click", function (event) {
            var div = document.createElement("div");
            div.textContent = "ボタンがクリックされました。";
            document.body.appendChild(div);
        });
    };
    return DOM;
}());
var dom = new DOM();
dom.setBody();
