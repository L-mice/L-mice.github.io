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
    }

    console.log(tag, classes, id);
}
document.addEventListener("click", onClick);

function bookmark(){
    if (window.sidebar) { // Mozilla Firefox Bookmark
        window.sidebar.addPanel(location.href,document.title,"");
      } else if(window.external) { // IE Favorite
        window.external.AddFavorite(location.href,document.title); }
      else if(window.opera && window.print) { // Opera Hotlist
        this.title=document.title;
        return true;
      }
}