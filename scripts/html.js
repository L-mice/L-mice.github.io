const FAVICON_DIR = "/L-mice.png";

function initialSetting(){
  let unicode = document.createElement("meta");
  unicode.charset = "utf-8";
  
  let viewport = document.createElement("meta");
  viewport.name = "viewport";
  viewport.content = [
    "width=device-width",
    "initial-scale=1.0",
    "minimum-scale=1.0",
    "maximum-scale=1.0",
    "user-scalable=0",
  ].join(",");
  
  document.head.appendChild(unicode);
  document.head.appendChild(viewport);

  let favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "img/png";
  favicon.href = FAVICON_DIR;

  document.head.appendChild(favicon);

  console.log("initialSetting done.");
}

function setTitle(title){
  document.title = title;
}

initialSetting();
console.log("html.js loaded");