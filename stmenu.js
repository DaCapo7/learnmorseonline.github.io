var menu;
window.addEventListener("load", () => {
  menu = document.getElementById("tabbar");
});

window.addEventListener("scroll", () => {
  thetop = menu.getBoundingClientRect().top;
  if (thetop < 0) {
    menu.style.position = "sticky";
    menu.style.boxShadow = "0 4px 2px -2px black";
    menu.style.top = "-1px";
  } else {
    menu.style.boxShadow = "none";
  }
});
