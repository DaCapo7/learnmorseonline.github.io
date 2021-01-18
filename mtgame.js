var modedejeu,
  score = 0,
  modeletterbutton,
  modestringbutton,
  startbutton,
  scoretext,
  showmoorseimg,
  showmorsebutton,
  soundbutton,
  carrelettres,
  carrelumiere,
  lives = 3,
  toshow,
  tofind,
  listenforanswer,
  answerh2,
  audio1 = new Audio("sounds/yes.mp3"),
  audio2 = new Audio("sounds/buzz.wav"),
  audio3 = new Audio("sounds/end.wav"),
  buttonsound,
  istheresound,
  sounds = {
    "-": new Audio("sounds/long.wav"),
    ".": new Audio("sounds/court.wav"),
    " ": new Audio("sounds/blank.wav"),
  };

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

answercatched = async function (e) {
  let answer = String.fromCharCode(e.keyCode).toLowerCase();
  if (answer == tofind) {
    if (istheresound == false) {
      audio1.play();
    }
    document.getElementById("mtwriten").style.background =
      "url(imgs/" + answer.toLowerCase() + "een.png)";
    document.getElementById("mtwriten").style.backgroundRepeat = "no-repeat";
    document.getElementById("mtwriten").style.backgroundSize = "auto 100%";
    document.getElementById("mtwriten").style.backgroundPosition = "center";
    score += 1;
    scoretext.innerHTML = `Score: ${score}`;
    startgame();
  } else {
    if (istheresound == false) {
      audio2.play();
    }
    document.getElementById("mtwriten").style.background =
      "url(imgs/" + answer.toLowerCase() + "red.png)";
    document.getElementById("mtwriten").style.backgroundRepeat = "no-repeat";
    document.getElementById("mtwriten").style.backgroundSize = "auto 100%";
    document.getElementById("mtwriten").style.backgroundPosition = "center";
    document
      .getElementById("mtwriten")
      .animate(
        [
          { transform: "translate(1px, 1px) rotate(0deg)" },
          { transform: " translate(-1px, -2px) rotate(-1deg)" },
          { transform: " translate(-3px, 0px) rotate(1deg)" },
          { transform: " translate(3px, 2px) rotate(0deg)" },
          { transform: " translate(1px, -1px) rotate(1deg)" },
          { transform: " translate(-1px, 2px) rotate(-1deg)" },
          { transform: " translate(-3px, 1px) rotate(0deg)" },
          { transform: " translate(3px, 1px) rotate(-1deg)" },
          { transform: " translate(-1px, -1px) rotate(1deg)" },
          { transform: " translate(1px, 2px) rotate(0deg);" },
          { transform: " translate(1px, -2px) rotate(-1deg);" },
        ],
        500
      );

    lives -= 1;
    if (lives > 0) {
      startgame();
      if (lives == 2) {
        document.getElementById("mtlife3").style.background = "gray";
        document.getElementById("mtlife3").style.boxShadow =
          "0px 0px 15px white";
      } else if (lives == 1) {
        document.getElementById("mtlife2").style.background = "gray";
        document.getElementById("mtlife2").style.boxShadow =
          "0px 0px 15px white";
      }
    } else {
      audio3.play()
      document.getElementById("mtlife1").style.background = "gray";
      document.getElementById("mtlife1").style.boxShadow = "0px 0px 15px white";
      startbutton.disabled = false;
    }
  }
  window.removeEventListener("keydown", answercatched);
};

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

var showimage = function () {
  if (showmoorseimg.style.visibility == "hidden") {
    console.log("showed");
    showmoorseimg.style.visibility = "visible";
  } else {
    console.log("hidded");
    showmoorseimg.style.visibility = "hidden";
  }
};

async function showwithlight(array) {
  startbutton.disabled = true;

  if (istheresound == false) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "_" || array[i] == "-") {
        carrelumiere.style.background = "blue";
        await new Promise((r) => setTimeout(r, 1000));
      } else if (array[i] == ".") {
        carrelumiere.style.background = "blue";
        await new Promise((r) => setTimeout(r, 300));
      } else if (array[i] == " ") {
        await new Promise((r) => setTimeout(r, 1000));
      }
      carrelumiere.style.background = "white";
      await new Promise((r) => setTimeout(r, 300));
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const item2 = array[i];
      await new Promise((resolve) => {
        //if (item != '-'  && item != ' ') {
        if (item != "." && item != " " && item != "-") {
          console.log("there was an error");
          setTimeout(resolve, 10);
        } else {
          sounds[item].onended = resolve;
          sounds[item].play();
        }
      });
    }
  }
  window.addEventListener("keydown", answercatched);
}

var startround = function () {
  document.getElementById("mtlife3").style.background = "#5ff";
  document.getElementById("mtlife3").style.boxShadow = "0px 0px 15px #10c7ff";
  document.getElementById("mtlife2").style.background = "#5ff";
  document.getElementById("mtlife2").style.boxShadow = "0px 0px 15px #10c7ff";
  document.getElementById("mtlife1").style.background = "#5ff";
  document.getElementById("mtlife1").style.boxShadow = "0px 0px 15px #10c7ff";
  lives = 3;
  startgame();
};

var startgame = function () {
  //while(lives > 0){
  tofind = (Math.random() * 36).toFixed() - 1;
  let arrayOfkeys = Object.keys(mtot);
  tofind = mtot[arrayOfkeys[tofind]];
  toshow = getKeyByValue(mtot, tofind);
  showwithlight(toshow);

  //}
};

var changesound = function () {
  if (istheresound == false) {
    buttonsound.src = "imgs/play.png";
    istheresound = true;
  } else {
    buttonsound.src = "imgs/noplay.png";
    istheresound = false;
  }
};

var afterload = function () {
  showmoorseimg.style.visibility = "hidden";
  var listenshowimage = showmorsebutton.addEventListener("click", showimage);
  var gamestart = startbutton.addEventListener("click", startround);
  var setistheresound = buttonsound.addEventListener("click", changesound);
};

window.addEventListener("load", () => {
  answerh2 = document.getElementById("mtanswer");
  modeletterbutton = document.getElementById("mtl1");
  modestringbutton = document.getElementById("mtl2");
  startbutton = document.getElementById("mtplay");
  scoretext = document.getElementById("mtscore");
  showmoorseimg = document.getElementById("showmorseimage");
  showmorsebutton = document.getElementById("mtshowhelp");
  soundbutton = document.getElementById("mtsound");
  carrelettres = document.getElementById("mtwriten");
  carrelumiere = document.getElementById("mtseen");
  buttonsound = document.getElementById("mtsound");
  istheresound = false;
  afterload();
});
