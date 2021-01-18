let button,
  toappend,
  hbody,
  hdejapris = [],
  wdejapris = [];
let htext =
  "Created by Dacapo, January, 20th 2021<br><br><a href='https://github.com/DaCapo7' target='blank'>Github</a><br><br>A very thanks to this <a href='https://discord.gg/CMygzPTFBv'>Discord</a> <br>For all the help the members gave me!";
let discover = new Audio("sounds/discover.wav"),
  isdiscoverednow = false;
let youhou = new Audio("sounds/youhou.mp3");
let elemlist = [
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
];
let hcounter = 0,
  haim = elemlist.length,
  credittext = document.createElement("p");

var playdiscover = async function () {
  discover.play();
};

var whilego = async function () {
  document.getElementById("divtoappendeaster").before(credittext);
  credittext.innerHTML = htext;
  credittext.style = "font-size : 80px; text-align:center;padding:30px;";
  youhou.play();
  youhou.volume = 0.2;

  for (i = 0; i > -5; i++) {
    await new Promise((re) => {
      setTimeout(re, 100);
    });
    document.body.style.background = "#000e46";
    credittext.style.color = "#ce0000";
    await new Promise((re) => {
      setTimeout(re, 100);
    });
    document.body.style.background = "#ce0000";
    credittext.style.color = "#000e46";
    await new Promise((re) => {
      setTimeout(re, 200);
    });
    document.body.style.background = "#000e46";
    credittext.style.color = "#ce0000";

    await new Promise((re) => {
      setTimeout(re, 300);
    });
    document.body.style.background = "#ce0000";
    credittext.style.color = "#000e46";
    await new Promise((re) => {
      setTimeout(re, 200);
    });
    document.body.style.background = "#000e46";
    credittext.style.color = "#ce0000";
    await new Promise((re) => {
      setTimeout(re, 100);
    });
    document.body.style.background = "#ce0000";
    credittext.style.color = "#000e46";

    await new Promise((re) => {
      setTimeout(re, 50);
    });
    document.body.style.background = "#000e46";
    credittext.style.color = "#ce0000";
    await new Promise((re) => {
      setTimeout(re, 50);
    });
    document.body.style.background = "#ce0000";
    credittext.style.color = "#000e46";
    await new Promise((re) => {
      setTimeout(re, 50);
    });
    document.body.style.background = "#000e46";
    credittext.style.color = "#ce0000";

    await new Promise((re) => {
      setTimeout(re, 50);
    });
    document.body.style.background = "#ce0000";
    credittext.style.color = "#000e46";
    await new Promise((re) => {
      setTimeout(re, 50);
    });
    document.body.style.background = "#000e46";
    credittext.style.color = "#ce0000";
    await new Promise((re) => {
      setTimeout(re, 50);
    });
    document.body.style.background = "#ce0000";
    credittext.style.color = "#000e46";

    await new Promise((re) => {
      setTimeout(re, 100);
    });
    document.body.style.background = "#000e46";
    credittext.style.color = "#ce0000";
    await new Promise((re) => {
      setTimeout(re, 50);
    });
    document.body.style.background = "#ce0000";
    credittext.style.color = "#000e46";
  }
};

var credit = async function () {
  discover.pause();
  let shortones = document.getElementsByClassName("hshortbar");
  let longones = document.getElementsByClassName("hlongbar");
  for (let i = 0; i < elemlist.length; i++) {
    await new Promise((re) => {
      setTimeout(re, 100);
    });
    elemlist[i].parentNode.removeChild(elemlist[i]);
  }
  document.body.style.background = "#000e46";
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 100);
  });
  document.body.style.background = "#000e46";
  await new Promise((re) => {
    setTimeout(re, 100);
  });
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 200);
  });
  document.body.style.background = "#000e46";
  await new Promise((re) => {
    setTimeout(re, 500);
  });
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 400);
  });
  document.body.style.background = "#000e46";
  await new Promise((re) => {
    setTimeout(re, 100);
  });
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 50);
  });
  document.body.style.background = "#000e46";
  await new Promise((re) => {
    setTimeout(re, 50);
  });
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 50);
  });
  document.body.style.background = "#000e46";
  await new Promise((re) => {
    setTimeout(re, 50);
  });
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 50);
  });
  document.body.style.background = "#000e46";
  await new Promise((re) => {
    setTimeout(re, 50);
  });
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 100);
  });
  document.body.style.background = "#000e46";
  await new Promise((re) => {
    setTimeout(re, 50);
  });
  document.body.style.background = "#ce0000";
  await new Promise((re) => {
    setTimeout(re, 1000);
  });
  whilego();
};

var clickonlong = function () {
  this.style.background = "red";
  this.style.boxShadow = "0px 0px 10px red";
  this.style.animationName = "turn";
  this.style.animationDuration = "1s";
  this.style.animationIterationCount = "infinite";
  this.style.animationTimingFunction = "linear";
  this.removeEventListener("click", clickonlong, false);
  hcounter += 1;
  if (hcounter == haim) {
    credit();
  }
};

var clickonshort = function () {
  this.style.background = "red";
  this.style.boxShadow = "0px 0px 10px red";
  this.removeEventListener("click", clickonshort, false);
  hcounter += 1;
  if (hcounter == haim) {
    credit();
  }
};

var pickrandomnumber = function (max) {
  let random = Math.round(Math.random() * max);
  return random;
};

var begineaster = function () {
  playdiscover();
  window.scrollTo(0, 0);

  document.getElementById("historyetc").style.display = "none";
  document.getElementById("labelbar").style.display = "none";
  document.getElementById("tabbar").style.display = "none";
  document.body.style.background = "#000e46";
  hbody.style.height = "100%";
  hbody.style.width = "100%";
  hbody.style.position = "absolute";

  a = 0;

  for (let i = 0; i < elemlist.length; i++) {
    a += 1;
    if (a % 3 != 0) {
      elemlist[i].classList.add("hlongbar");
      elemlist[i].style.height = "50px";
      elemlist[i].style.width = "150px";
      elemlist[i].style.background = "#50FFFF";
      elemlist[i].style.boxShadow = "0px 0px 5px #50FFFF";
      elemlist[i].style.borderRadius = "50px";
    } else {
      elemlist[i].classList.add("hshortbar");
      elemlist[i].style.height = "50px";
      elemlist[i].style.width = "50px";
      elemlist[i].style.background = "#50FFFF";
      elemlist[i].style.boxShadow = "0px 0px 5px #50FFFF";
      elemlist[i].style.borderRadius = "50px";
    }

    document.getElementById("divtoappendeaster").before(elemlist[i]);
    elemlist[i].style.position = "absolute";
    elemlist[i].style.left = pickrandomnumber(screen.width - 150) + "px";

    elemlist[i].style.top = pickrandomnumber(screen.height - 50) + "px";
  }
  let shortones = document.getElementsByClassName("hshortbar");
  for (var i = 0; i < shortones.length; i++) {
    shortones[i].addEventListener("click", clickonshort, false);
  }
  let longones = document.getElementsByClassName("hlongbar");
  for (var i = 0; i < longones.length; i++) {
    longones[i].addEventListener("click", clickonlong, false);
  }
};

window.addEventListener("load", () => {
  button = document.getElementById("easteregg");
  button.addEventListener("click", begineaster);
  hbody = document.getElementById("heasterdiv");
});
