const articleList = [
    {
        title: "Top",
        dir: "/",
    },
    {
        title: "About",
        dir: "about",
    },
    {
        title: "Tools",
        dir: "tools",
    },
    {
        title: "Articles",
        dir: "/articles",
    },
    {
        title: "Members",
        dir: "members",
    },
];


(function(){
    for(let k = 0, base = document.getElementsByClassName("contents")[0]; k < articleList.length; k++){
        base.appendChild(makeItem(articleList[k].title, articleList[k].dir));
    }
})();

function makeItem(text, dir){
    let itemBack = document.createElement("div");
    itemBack.classList.add("listItem");

    let title = document.createElement("p");
    title.innerHTML = text;
    title.classList.add("listTitle");

    let btn = document.createElement("button");
    btn.innerHTML = "See this";
    btn.onclick = function(){
        window.open(dir);
    }
    btn.classList.add("goButton");


    itemBack.appendChild(title);
    itemBack.appendChild(btn);

    return itemBack;
}