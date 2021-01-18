(() => {
  var tmisimageshowed = false,
    tmscore = 0,
    tmstartbutton,
    tmscoretext,
    tmshowmoorseimg,
    tmshowmorsebutton,
    arraytyped,
    arraytypedtoshow,
    tmmorsecodewriten,
    tmcarrelettres,
    tmcarremorsetyped,
    mtlistenforanswer,
    tmimageofletter,
    tmtimerest,
    tmtimebar,
    tmtimeblank,
    audio1 = new Audio("sounds/yes.mp3"),
    audio2 = new Audio("sounds/buzz.wav"),
    audio3 = new Audio("sounds/end.wav");

  var mtot = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  };

  var ttom = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  var showimage = function () {
    if (tmisimageshowed == false) {
      tmisimageshowed = true;
      tmshowmoorseimg.style.visibility = "visible";
    } else {
      tmisimageshowed = false;
      tmshowmoorseimg.style.visibility = "hidden";
    }
  };
  var add1toscore = function () {
    tmscore += 1;
    tmscoretext.innerHTML = "Score: " + tmscore;
  };

  var makebackgroundred = async function () {
    tmcarremorsetyped.style.background = "red";
    await new Promise((resolve) => setTimeout(resolve, 500));
    tmcarremorsetyped.style.background = "white";
  };
  makebackgroundgreen = async function () {
    tmcarremorsetyped.style.background = "green";
    await new Promise((resolve) => setTimeout(resolve, 500));
    tmcarremorsetyped.style.background = "white";
  };

  tmlistenforanswer = function (e) {
    console.log("e", e.key);
    if (e.key == "d") {
      arraytypedtoshow += ". ";
      arraytyped += ".";
    } else if (e.key == "l") {
      arraytypedtoshow += "_ ";
      arraytyped += "-";
    }
    console.log("array", arraytyped);
    tmmorsecodewriten.innerHTML = arraytypedtoshow;
    tmmorsecodewriten.style.fontSize = "100px";
    tmmorsecodewriten.style.position = "absolute";
    if (arraytyped == tofind.substring(0, arraytyped.length)) {
      tmmorsecodewriten.style.color = "green";
    } else {
      tmmorsecodewriten.style.color = "red";
      makebackgroundred();
      audio2.play();
      window.removeEventListener("keydown", tmlistenforanswer);
      startgame();
    }
    if (arraytyped == tofind) {
      add1toscore();
      audio1.play();
      makebackgroundgreen();
      window.removeEventListener("keydown", tmlistenforanswer);
      startgame();
    }
  };

  var startcount = async function () {
    tmtimebar.style.width = "0px";
    time = 33;
    let a = 0;
    for (let i = 0; i < 330; i++) {
      await new Promise((r) => setTimeout(r, 100));
      a += 1;
      console.log("bou", i);
      if (a % 10 == 0) {
        time--;
      }
      tmtimerest.innerHTML = time;
      let size = tmtimeblank.offsetWidth;
      tmtimebar.style.width = (a / 330) * size + "px";
    }
    window.removeEventListener("keydown", tmlistenforanswer);
    audio3.play();
    tmtimerest.innerHTML = "Finished !";
    tmstartbutton.disabled = false;
  };

  var startround = function () {
    tmscore = 0;
    tmscoretext.innerHTML = "Score: 0";
    startgame();
    startcount();
    tmstartbutton.disabled = true;
  };

  var startgame = function () {
    arraytyped = "";
    arraytypedtoshow = "";
    tmmorsecodewriten.innerHTML = "";
    tofind = (Math.random() * 36).toFixed() - 1;
    let arrayOfkeys = Object.keys(ttom);
    tofind = ttom[arrayOfkeys[tofind]];
    toshow = getKeyByValue(ttom, tofind);
    console.log("toshow", toshow, "tofind", tofind);

    tmcarrelettres.style.background =
      "url(imgs/" + toshow.toLowerCase() + ".png) no-repeat";
    tmcarrelettres.style.backgroundSize = "contain";
    tmcarrelettres.style.backgroundPositionX = "center";
    window.addEventListener("keydown", tmlistenforanswer);
  };

  var afterload = function () {
    tmshowmoorseimg.style.visibility = "hidden";
    tmshowmorsebutton.addEventListener("click", showimage);
    tmstartbutton.addEventListener("click", startround);
  };

  window.addEventListener("load", () => {
    tmstartbutton = document.getElementById("tmplay");
    tmscoretext = document.getElementById("tmscore");
    tmshowmoorseimg = document.getElementById("tmshowmorseimage");
    tmshowmorsebutton = document.getElementById("tmshowhelp");
    tmcarrelettres = document.getElementById("tmseen");
    tmcarremorsetyped = document.getElementById("tmwriten");
    tmmorsecodewriten = document.getElementById("tmmorsecodewriten");
    tmimageofletter = document.getElementById("tmimageofletter");
    tmtimerest = document.getElementById("tmcounter");
    tmtimebar = document.getElementById("tmcountercharge");
    tmtimeblank = document.getElementById("tmblankcounter");
    afterload();
  });
})();
