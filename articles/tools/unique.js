const toolpages = [
    "click_counter",
    "a",
    "b",
];

(function(){
    let btn = Header.item.rightside.children[1];
    let letters = btn.innerHTML.split("");

    letters[0] = "<span class=\"highlight\">" + letters[0] + "</span>";
    btn.innerHTML = letters.join("");
})();

(function(){
    let base = document.getElementsByClassName("contents")[0];

    for(let k = 0; k < toolpages.length; k++){
        
    }
})();

