function makeBasicButton(label, clickActivtiy){
    let item = document.createElement("button");
    item.value = label;
    item.onclick = clickActivtiy;

    item.addClass = function(className){
        this.classList.add(className);

        return this;
    };

    return item;
}