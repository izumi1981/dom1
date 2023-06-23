
class DOM {
    setBody() {
        const div: HTMLDivElement = document.createElement("div");
        div.textContent = "DOMのdivです。";
        document.body.appendChild(div);

        const button: HTMLButtonElement = document.createElement("button");
        button.textContent = "DOMのbuttonです";
        document.body.appendChild(button);

        button.addEventListener("click", function(event) {

            const div: HTMLDivElement = document.createElement("div");
            div.textContent = "ボタンがクリックされました。";
            document.body.appendChild(div);
        
        });
    }
}

const dom: DOM = new DOM();
dom.setBody();