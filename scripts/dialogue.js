function makeDialogue(){
    this.back = document.createElement("div");
    this.back.style.width = "50vw";
    this.back.style.height = "50vh";
    this.back.style.position = "fixed";
    this.back.style.transform = "translateX(25vw) translateY(25vh)";
    this.back.style.display = "block";

    this.titleBar = document.createElement("span");
    this.titleBar.style.width = "50vw";
    this.titleBar.style.height = "5vh";
    this.titleBar.style.background = "#444444";
    this.titleBar.style.color = "#FFFFFF";

    this.contents = document.createElement("div");
    this.contents.style.width = "50vw";
    this.contents.style.height = "45vh";
    this.contents.style.background = "#FFFFFF";
    this.contents.style.color = "#000000";

    this.back.appendChild(titleBar);
    this.back.appendChild(contents);

    this.setTitle = function(title){
        this.titleBar.innerHTML = title;
    };

    this.getTitle = function(){
        return this.titleBar.innerHTML;
    }

    this.setMessage = function(message){
        this.contents.innerHTML = message;
    }

    this.getMessage = function(){
        return this.contents.innerHTML;
    }

    this.setVisiblity = function(visiblity){
        if(visiblity) this.back.display = "block";
        else this.back.display = "none";
    }
    
    this.show = function(){
        this.setVisiblity(true);
    }

    this.dismiss = function(){
        this.setVisiblity(false);
    }

    this.getDialogue = function(){
        return this.back;
    }

    return this;
}