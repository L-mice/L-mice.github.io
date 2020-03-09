const Header = {
    ICON_DIR: HTML.LOGO_DIR,
    CSS_DIR: "header.css",

    CLASS_NAME: {
        back: "headerBack",
        icon: "icon",
        title: "titleBar",
        header_btn: "headerBtn",
    },

    item:{
        header: null,
        leftside: null,
        rightside: null,
    },

    set: function(){
        Header.item.header = document.createElement("div");
        Header.item.header.role = "banner";
        Header.item.header.classList.add(Header.CLASS_NAME.back);

        Header.item.leftside = document.createElement("div");
        Header.item.leftside.classList.add("split-header");

    
        let icon = document.createElement("img");
        icon.src = Header.ICON_DIR;
        icon.onclick = function(){
            location.href = "https://L-mice.github.io";
        };
        icon.classList.add(Header.CLASS_NAME.icon);
    
        let titleBar = document.createElement("p");
        if(SUBTITLE instanceof String){
            titleBar.innerHTML = SUBTITLE;
        }
        titleBar.classList.add(Header.CLASS_NAME.title);
    
        Header.item.leftside.appendChild(icon);
        Header.item.leftside.appendChild(titleBar);

        
        Header.item.rightside = document.createElement("div");
        Header.item.rightside.classList.add("split-header");

        
        let aboutBtn = makeBasicButton("About", function(){
            location.href = "/articles/about";
        }).addClass(Header.CLASS_NAME.header_btn);

        let toolBtn = makeBasicButton("Tools", function(){
            location.href = "/articles/tools";
        }).addClass(Header.CLASS_NAME.header_btn);

        let articlesBtn = makeBasicButton("Articles", function(){
            location.href = "/articles";
        }).addClass(Header.CLASS_NAME.header_btn);

        Header.item.rightside.appendChild(articlesBtn);
        Header.item.rightside.appendChild(toolBtn);
        Header.item.rightside.appendChild(aboutBtn);

        Header.item.header.appendChild(Header.item.leftside);
        Header.item.header.appendChild(Header.item.rightside);
    
        document.body.insertBefore(Header.item.header,document.body.children[0]);
    },

    setVisiblity: function(bool){
        
    },
};

Header.set();
console.log("header.js loaded.");