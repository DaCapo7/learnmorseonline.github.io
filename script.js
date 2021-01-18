var transtab, transpage, morseex, morseextab, thistory, historytab;

window.addEventListener("load", () => {
  transtab = document.getElementById("tab1");
  transpage = document.getElementById("translatetab");
  morseextab = document.getElementById("tab2");
  morseex = document.getElementById("morseextab");
  exmorsetab = document.getElementById("tab3");
  exmorse = document.getElementById("exmorsetab");
  historytab = document.getElementById("tab4");
  thistory = document.getElementById("historyetc");

  exmorse.style.display = "none";
  transpage.style.display = "block";
  morseex.style.display = "none";
  transtab.style.background = "white";
  thistory.style.display = "none";

  transtab.addEventListener("click", () => {
    transtab.style.background = "white";
    morseextab.style.background = "rgb(219, 219, 219)";
    exmorsetab.style.background = "rgb(219, 219, 219)";
    historytab.style.background = "rgb(219,219,219)";

    transpage.style.display = "block";
    morseex.style.display = "none";
    exmorse.style.display = "none";
    thistory.style.display = "none";
  });
  morseextab.addEventListener("click", () => {
    transtab.style.background = "rgb(219, 219, 219)";
    morseextab.style.background = "white";
    exmorsetab.style.background = "rgb(219, 219, 219)";
    historytab.style.background = "rgb(219,219,219)";

    transpage.style.display = "none";
    morseex.style.display = "grid";
    exmorse.style.display = "none";
    thistory.style.display = "none";
  });
  exmorsetab.addEventListener("click", () => {
    transtab.style.background = "rgb(219, 219, 219)";
    morseextab.style.background = "rgb(219, 219, 219)";
    exmorsetab.style.background = "white";
    historytab.style.background = "rgb(219,219,219)";

    transpage.style.display = "none";
    morseex.style.display = "none";
    exmorse.style.display = "grid";
    thistory.style.display = "none";
  });
  historytab.addEventListener("click", () => {
    transtab.style.background = "rgb(219, 219, 219)";
    morseextab.style.background = "rgb(219, 219, 219)";
    exmorsetab.style.background = "rgb(219,219,219)";
    historytab.style.background = "white";

    transpage.style.display = "none";
    morseex.style.display = "none";
    exmorse.style.display = "none";
    thistory.style.display = "block";
  });
});
