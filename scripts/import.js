let preloads = [];

function importScript(dir){
  let a = document.createElement("script");
  a.src = dir;
  document.body.appendChild(a);
}

function importCss(dir){
  let a = document.createElement("link);
  a.rel = "stylesheet";
  a.href = dir;
  document.body.appendChild(a);
}
