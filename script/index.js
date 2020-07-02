var twshareBtn = document.getElementById("twshare");
twshareBtn.onclick = function(){
    shareOnTwitter("", location.href);
};
var fbshareBtn = document.getElementById("fbshare");
fbshareBtn.onclick = function(){
    shareUrlOnFacebook(location.href);
};
var lineshareBtn= document.getElementById("lineshare");
lineshareBtn.onclick = function(){
    shareUrlOnLINE(location.href);
};
var shareBtn = document.getElementById("share");
shareBtn.onclick = function(){
    share("", "", location.href);
};