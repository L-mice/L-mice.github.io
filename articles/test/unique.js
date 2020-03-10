(function(){
    document.body.innerHTML = "<div class=\"test\"><p> Test Banner </p></div>" + document.body.innerHTML;
    
    let banner = document.body.children[0];
    banner.onclick = function(){
        banner.className = (banner.className == "test") ? "test activeBanner" : "test";
    };
})();