const Header = {
    ICON_DIR: HTML.LOGO_DIR,
    CSS_DIR: "header.css",

    CLASS_NAME: {
        back: "headerBack",
        icon: "icon",
        title: "titleBar",
    },

    set: function(){
        let header = document.createElement("div");
        header.role = "banner";
        header.classList.add(Header.CLASS_NAME.back);

        let header_left = document.createElement("div");
        header_left.classList.add("split-header");

    
        let icon = document.createElement("img");
        icon.src = Header.ICON_DIR;
        icon.onclick = function(){
            location.href = "https://L-mice.github.io";
        };
        icon.classList.add(Header.CLASS_NAME.icon);
    
        let titleBar = document.createElement("p");
        titleBar.innerHTML = SUBTITLE;
        titleBar.classList.add(Header.CLASS_NAME.title);
    
        header_left.appendChild(icon);
        header_left.appendChild(titleBar);

        
        let header_right = document.createElement("div");
        header_right.classList.add("split-header");


        header.appendChild(header_left);
        header.appendChild(header_right);
    
        document.body.insertBefore(header,document.body.children[0]);
        importCss(Header.CSS_DIR);
    }
};

Header.set();
console.log("header.js loaded.");