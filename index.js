const SUBTITLE = "Top";
const INDEX_CSS = "index.css";

const Menu_id = "items_back";
const Menu_items = [
    {
        title: "close",
        activity: function(){
            document.getElementById("items_back").style.display = "none";
        },
    },
    {
        title: "alert",
        activity: function(){
            alert(SUBTITLE);
        },
    },
    {
        title: "articles",
        activity: function(){
            location.href = "/articles/top.html";
        },
    },
    {
        title: "Top",
        activity: function(){
            location.href = "/index.html";
        },
    },
];

importCss(INDEX_CSS);


for(let k = 0, back = document.getElementById(Menu_id); k < Menu_items.length; k++){
    let item = document.createElement("button");
    item.innerHTML = Menu_items[k].title;
    item.onclick = Menu_items[k].activity;
    item.classList.add("menuItem");

    back.appendChild(item);
}