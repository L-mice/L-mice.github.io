(function(){
    document.body.innerHTML = "<div class=\"test\"><p> Test Banner </p></div>" + document.body.innerHTML;
    document.body.children[0].classList.add("activeBanner");
})();