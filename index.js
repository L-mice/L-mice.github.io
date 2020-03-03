const SUBTITLE = "Top";
const INDEX_CSS = "index.css";

const Menu_id = "items_back";
const Menu_items = [
    {
        title: "Show",
        activity: function(){
            resetMenu();
            for(let k = 1, back = document.getElementById(Menu_id); k < Menu_items.length; k++){
                let item = makeMenuItem(Menu_items[k]);
                
                setTimeout(function(){
                    back.appendChild(item);
                },50);
            }
        },
    },
    {
        title: "close",
        activity: function(){
            resetMenu();
            
            let item = makeMenuItem(Menu_items[0]);
            item.style.width = "100vw";

            document.getElementById(Menu_id).appendChild(item);
        },
    },
];

importCss(INDEX_CSS);
Menu_items[1].activity();

function makeMenuItem(obj){
    let item = document.createElement("button");
    item.innerHTML = obj.title;
    item.onclick = obj.activity;
    item.classList.add("menuItem");

    return item;
}

function resetMenu(){
    let back = document.getElementById(Menu_id);
    back.innerHTML = "";
}