function makeDialogue(name){
    this.background = document.createElement("div");
    this.background.id = `${name}_dialogue`;
    this.background.style.width = "100vw";
    this.background.style.height = "100vh";
    this.background.style.background = "#00000000";
    this.background.style.display = "flex";
    this.background.style.position = "absolute";

    this.back = document.createElement("div");
    this.back.classList.add("dialogue_back");

    this.bar = document.createElement("div");
    this.bar.classList.add("dialogue_bar");

    this.titleBar = document.createElement("div");
    this.titleBar.id = `${this.background.id}_titlebar`;
    this.titleBar.classList.add("dialogue_title");

    this.closeBtn = document.createElement("div");
    this.closeBtn.id = `${this.background.id}_btn`;
    this.closeBtn.innerHTML = "close";
    this.closeBtn.classList.add("dialogue_closebtn");
    this.closeBtn.onclick = function(){
        let a = this.id.split("_");
        document.getElementById(`${a[0]}_${a[1]}`).style.display = "none";
    };

    this.contents = document.createElement("div");
    this.contents.id = `${this.background.id}_contents`;
    this.contents.classList.add("dialogue_contents");

    this.bar.appendChild(this.titleBar);
    this.bar.appendChild(this.closeBtn);
    this.back.appendChild(this.bar);
    this.back.appendChild(this.contents);

    this.background.appendChild(this.back);

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
        return this.background;
    }

    return this;
}