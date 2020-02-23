const HEADER_ICON = "https://avatars1.githubusercontent.com/u/61101436?s=400&u=39b1e1897dde613706bf64d19268829c050292b7&v=4";
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

    let icon = document.createElement("img");
    icon.src = HEADER_ICON;
    icon.onclick = function(){
        location.href = "https://L-mice.github.io";
    };
    icon.classList.add(HEADER_CLASSES.icon);

    let titleBar = document.createElement("p");
    titleBar.innerHTML = document.title;

    header.appendChild(icon);
    header.appendChild(titleBar);

    document.body.insertBefore(header,document.body.children[0]);
}

makeHeader();
console.log("header.js loaded.");