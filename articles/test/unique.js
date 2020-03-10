const SUBTITLE = "TEST";
importCss("index.css");

(function(){
    let a = document.getElementsByClassName("contents")[0];
    a.innerHTML += "<div class=\"test\"><p> Test Banner </p></div>";
})();