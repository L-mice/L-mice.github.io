function importScript(dir){
  let a = document.createElement("script");
  a.src = dir;
  document.head.appendChild(a);
}

function importCss(dir){
  let a = document.createElement("link);
  a.rel = "stylesheet";
  a.href = dir;
  document.head.appendChild(a);
}
