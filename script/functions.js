function go(url){
    location.href = url;
}

function openWindow(url){
    window.open(url);
}

function openSubWindow(url){
    window.open(url, "", "toolbar=no");
}

async function share(title, text, url){
    if(navigator.share){
        navigator.share({
            title: title,
            text: text,
            url: url
        });
    }
}

function showImageAsFull(dir){
    let back = document.createElement("div");
    back.id = "full-img-back";
    back.classList.add("full-img-back");
    back.classList.add("fade-in");


    let img = document.createElement("img");
    img.classList.add("full-img");
    img.src = dir;

    back.insertAdjacentElement("beforeend", img);
    document.body.insertAdjacentElement("afterbegin", back);
}