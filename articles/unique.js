const articleList = [
    {
        title: "YouTubeチャンネルを開設しました",
        dir: "create_youtubechannel",
	    own_thumbnail: true,
    },
    {
        title: "愛用のイヤホンが安くなった。",
        dir: "sale_0",
	    own_thumbnail: false,
    },
    {
        title: "Members",
        dir: "members",
	    own_thumbnail: false,
    },
    {
        title: "Articles",
        dir: "/articles",
	    own_thumbnail: false,
    },
    {
        title: "Tools",
        dir: "tools",
	    own_thumbnail: false,
    },
    {
        title: "About",
        dir: "about",
	    own_thumbnail: false,
    },
    {
        title: "Top",
        dir: "/",
	    own_thumbnail: false,
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
        base.appendChild(
            makeItem(
                articleList[k].title,
                articleList[k].dir,
                articleList[k].own_thumbnail ? `${articleList[k].dir}/thumbnail.png` : "/images/neko_thumbnail.png"
            )
        );
    }
})();

function makeItem(text, dir, thumbnail){
    let itemBack = document.createElement("div");
    itemBack.classList.add("item_back");
    itemBack.onclick = function(){
        location.href = dir;
    };

    let thumbBack = document.createElement("div");
    thumbBack.classList.add("itemThumbnail");

    let thumb = document.createElement("img");
    thumb.src = thumbnail;
    thumb.classList.add("thumbImage");

    thumbBack.appendChild(thumb);

    let title = document.createElement("p");
    title.innerHTML = text;
    title.classList.add("itemTitle");

    itemBack.appendChild(thumbBack);
    itemBack.appendChild(title);

    return itemBack;
}