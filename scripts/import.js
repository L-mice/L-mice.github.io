const preloads = [
  "/scripts/html.js",
  "/scripts/header.js",
];

function importScript(dir){
  let a = document.createElement("script");
  a.src = dir;
  document.body.appendChild(a);
}

function importCss(dir){
  let a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = "/stylesheets/" + dir;
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