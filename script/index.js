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
    }
    
    if(hasClass("sharebtn")){
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
    }

    console.log(tag, classes, id);
}

document.addEventListener("click", onClick);