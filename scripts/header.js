const Header = {
    ICON_DIR: HTML.FAVICON_DIR,
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
    
        let icon = document.createElement("img");
        icon.src = Header.ICON_DIR;
        icon.onclick = function(){
            location.href = "https://L-mice.github.io";
        };
        icon.classList.add(Header.CLASS_NAME.icon);
    
        let titleBar = document.createElement("p");
        titleBar.innerHTML = document.title;
        titleBar.classList.add(Header.CLASS_NAME.title);
    
        header.appendChild(icon);
        header.appendChild(titleBar);
    
        document.body.insertBefore(header,document.body.children[0]);
        importCss(Header.CSS_DIR);
    }
};


console.log("header.js loaded.");