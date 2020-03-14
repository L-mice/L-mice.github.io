function makeDialogue(name){
    this.back = document.createElement("div");
    this.back.id = `${name}_dialogue`;
    this.back.style.width = "50vw";
    this.back.style.height = "50vh";
    this.back.style.position = "fixed";
    this.back.style.transform = "translateX(25vw) translateY(25vh)";
    this.back.style.display = "block";
    this.back.style.borderRadius = "4px";

    this.titleBar = document.createElement("div");
    this.titleBar.id = `${this.back.id}_titlebar`;
    this.titleBar.style.width = "40vw";
    this.titleBar.style.height = "5vh";
    this.titleBar.style.background = "#444444";
    this.titleBar.style.color = "#FFFFFF";
    this.titleBar.style.margin = "0";

    this.closeBtn = document.createElement("div");
    this.closeBtn.id = `${this.back.id}_btn`;
    this.closeBtn.innerHTML = "close";
    this.closeBtn.style.width = "10vw";
    this.closeBtn.style.height = "5vh";
    this.closeBtn.style.background = "#444444";
    this.closeBtn.style.color = "#FFFFFF";
    this.closeBtn.style.margin = "0";
    this.closeBtn.onclick = function(){
        this.dismiss();
    };


    this.contents = document.createElement("div");
    this.contents.id = `${this.back.id}_contents`;
    this.contents.style.width = "50vw";
    this.contents.style.height = "45vh";
    this.contents.style.background = "#FFFFFF";
    this.contents.style.color = "#000000";

    this.back.appendChild(this.titleBar);
    this.back.appendChild(this.closeBtn);
    this.back.appendChild(this.contents);

    this.setTitle = function(title){
        document.getElementById(this.titleBar.id).innerHTML = title;
    };

    this.getTitle = function(){
        return document.getElementById(this.titleBar.id).innerHTML;
    }

    this.setMessage = function(message){
        document.getElementById(this.contents.id).innerHTML = message;
    }

    this.getMessage = function(){
        return document.getElementById(this.contents.id).innerHTML;
    }

    this.setVisiblity = function(visiblity){
        document.getElementById(this.back.id).style.display = visiblity ? "block" : "none";
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