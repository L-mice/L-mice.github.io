const articleList = [
    {
        title: "愛用のイヤホンが安くなった。",
        dir: "sale_0",
    },
    {
        title: "Members",
        dir: "members",
    },
    {
        title: "Members",
        dir: "members",
    },
    {
        title: "Articles",
        dir: "/articles",
    },
    {
        title: "Tools",
        dir: "tools",
    },
    {
        title: "About",
        dir: "about",
    },
    {
        title: "Top",
        dir: "/",
    },
];

(function(){
    let btn = Header.item.rightside.children[0];
    let letters = btn.innerHTML.split("");

    letters[0] = "<span class=\"highlight\">" + letters[0] + "</span>";
    btn.innerHTML = letters.join("");
})();

(function(){
    for(let k = 0, base = document.getElementsByClassName("contents")[0]; k < articleList.length; k++){
        base.appendChild(makeItem(articleList[k].title, articleList[k].dir));
    }
})();

function makeItem(text, dir){
    let itemBack = document.createElement("div");
    itemBack.classList.add("item_back");

    let thumb = document.createElement("img");
    thumb.src = "/images/neko_thumbnail.png";
    thumb.classList.add("itemThumbnail");

    let title = document.createElement("p");
    title.innerHTML = text;
    title.classList.add("itemTitle");

    let cover = document.createElement("div");
    cover.onclick = function(){
        location.href = dir;
    };
    cover.classList.add("cover");

    itemBack.appendChild(thumb);
    itemBack.appendChild(title);
    itemBack.appendChild(cover);

    return itemBack;
}