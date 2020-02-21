let preloads = [
  "html.js",
];

(function(){
  for(let i = 0; i < preloads.length; i++){
    console.log("Loading " + preloads[i] + "....");
    importScript(preloads[i]);
  }
})();

function importScript(dir){
  let a = document.createElement("script");
  a.src = "/scripts/" + dir;
  document.body.appendChild(a);
}

function importCss(dir){
  let a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = "/stylesheets/" + dir;
  document.body.appendChild(a);
}
