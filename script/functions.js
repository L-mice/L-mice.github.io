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