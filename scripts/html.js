console.log("html.js loaded");
initialSetting();

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

  console.log("initialSetting done.");
}

setTitle = function(title){
  document.title = title;
}