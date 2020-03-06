const preloads = [
  "/scripts/html.js",
  "/scripts/button.js",
  "/scripts/header.js",
];

function importScript(dir){
  let a = document.createElement("script");
  a.src = dir;
  document.body.appendChild(a);
}

function importCss(cssName){
  importCssFreeDir("/stylesheets/" + cssName);
}

function inportCssFreeDir(dir){
  let a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = dir;
  document.body.appendChild(a);
}


(function(){
  let k = 0;

  let f = function(){
    if(k < preloads.length){
      importScript(preloads[k]);

      k++;
      setTimeout(f, 500);
    }
  };
  f();
})();