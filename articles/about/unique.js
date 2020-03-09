(function(){
    let btn = Header.item.rightside.children[2];
    let letters = btn.innerHTML.split("");

    letters[0] = "<span class=\"highlight\">" + letters[0] + "</span>";
    btn.innerHTML = letters.join("");
})();