const HEADER_ICON = FAVICON_DIR;
const HEADER_CSS = "header.css";

const HEADER_CLASSES = {
    back: "headerBack",
    icon: "icon",
    title: "titleBar",
};

importCss(HEADER_CSS);

function makeHeader(){
    let header = document.createElement("div");
    header.role = "banner";
    header.classList.add(HEADER_CLASSES.back);

    let icon = document.createElement("img");
    icon.src = HEADER_ICON;
    icon.onclick = function(){
        location.href = "https://L-mice.github.io";
    };
    icon.classList.add(HEADER_CLASSES.icon);

    let titleBar = document.createElement("p");
    titleBar.innerHTML = document.title;
    titleBar.classList.add(HEADER_CLASSES.title);

    header.appendChild(icon);
    header.appendChild(titleBar);

    document.body.insertBefore(header,document.body.children[0]);
}

makeHeader();
console.log("header.js loaded.");