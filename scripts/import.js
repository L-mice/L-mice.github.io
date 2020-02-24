let preloads = [
  "html.js",
  "header.js",
];

(function(){
  for(let i = 0; i < preloads.length; i++){
    console.log("Loading " + preloads[i] + "....");
    if(preloads[i].indexOf("/") == -1) importScript("/scripts/" + preloads[i]);
    else importScript(preloads[i]);
  }
})();

function importScript(dir){
  let a = document.createElement("script");
  a.src = dir;
  document.getElementsByName("importScripts")[0].insertAdjacentElement("afterend", a);
}

function importCss(dir){
  let a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = "/stylesheets/" + dir;
  document.body.appendChild(a);
}
