function onClick(event){
    let target = event.target;  //Clicked Element
    let classes = target.className.split(" ");
    let id = target.id;
    let tag = target.tagName.toLowerCase();

    let hasClass = function(classname){
        return classes.indexOf(classname) != -1;
    };

    switch(id){
        case "headerbase":
            go("/index.html")
            break;

        case "full-img-back":
            target.classList.add("fade-out");
            setTimeout(function(){
                target.remove();
            }, 3000);
            break;
    }
    
    switch(true){
        case hasClass("sharebtn"):
        switch(true){
            case hasClass("twshare"):
                shareOnTwitter("", location.href);
                break;

            case hasClass("fbshare"):
                shareUrlOnFacebook(location.href);
                break;

            case hasClass("lineshare"):
                shareUrlOnLINE(location.href);
                break;

            case hasClass("sharestandard"):
                share("", "", location.href);
                break;
        }
        break;

        case hasClass("article-img"):
            showImageAsFull(target.src);
            break;
    }

    console.log(tag, classes, id);
}
document.addEventListener("click", onClick);