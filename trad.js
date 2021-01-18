let input,
  output,
  reversebut,
  tomorse = false,
  inputlab,
  outputlab,
  //playbutton = document.createElement("button"),
  playbutton = document.createElement("img");
playposition = "input";
//playbutton.innerText = "Play";
playbutton.src = "imgs/play.png";

var sounds = {
  "-": new Audio("sounds/long.wav"),
  ".": new Audio("sounds/court.wav"),
  " ": new Audio("sounds/blank.wav"),
};
playbutton.style = "margin-left: 10px;";
var ephemere;

function replaceAll(str, find, replace) {
  var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return str.replace(new RegExp(escapedFind, "g"), replace);
}

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
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
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
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

var morsetotext = function (morset) {
  morset = morset.split(/(\s+)/);
  translated = "";
  for (let i = 0; i < morset.length; i++) {
    if (morset[i] != " ") {
      let toadd = mtot[morset[i]];
      if (toadd != undefined) {
        translated += toadd;
      } else {
        translated += "$";
      }
    }
  }
  return translated;
};

var texttomorse = function (text) {
  let translated = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] != " ") {
      let toadd = ttom[text[i]];
      if (toadd != undefined) {
        translated += toadd;
      } else {
        translated += "$";
      }
      translated += " ";
    }
  }
  return translated;
};

var translate = function (e) {
  tot = input.value;
  if (tomorse == false) {
    tot = replaceAll(tot, "_", "-");
    output.value = morsetotext(tot);
  }
  if (tomorse == true) {
    tot = tot.toLowerCase();
    console.log(tot);
    output.value = texttomorse(tot);
  }
};

var reverse = function () {
  if (tomorse == false) {
    outputlab.innerHTML = "Morse:";
    ephemere = output.value;
    output.value = input.value;
    input.value = ephemere;
    inputlab.innerHTML = "Text:";
    tomorse = true;
    output.before(playbutton);
    playposition = "output";
  } else {
    inputlab.innerHTML = "Morse:";
    outputlab.innerHTML = "Text:";
    ephemere = output.value;
    output.value = input.value;
    input.value = ephemere;
    tomorse = false;
    input.before(playbutton);
    playposition = "input";
  }
};

async function playMorseArr(morseArr) {
  for (let i = 0; i < morseArr.length; i++) {
    const item = morseArr[i];
    const item2 = morseArr[i];
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

var playsound = async function () {
  if (playposition == "input") {
    toplay = input.value;
  } else {
    toplay = output.value;
  }
  toplay = replaceAll(toplay, "_", "-");
  playMorseArr(toplay);
};

var aftload = function () {
  input.before(playbutton);
  playbutton.style.height = "30px";
  playbutton.style.transform = "translateY(7px)";
  translationlistener = input.addEventListener("change", translate);
  reverselistener = reversebut.addEventListener("click", reverse);
  playlistener = playbutton.addEventListener("click", playsound);
};

window.addEventListener("load", () => {
  input = document.getElementById("input1");
  output = document.getElementById("output1");
  reversebut = document.getElementById("reverse");
  inputlab = document.getElementById("inputtype");
  outputlab = document.getElementById("outputtype");
  console.log(input);
  aftload();
});
