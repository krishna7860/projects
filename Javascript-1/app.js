var page = document.querySelector("#page-2");
var startGame = document.querySelector("#startGame");
var name = document.getElementById("user-name");
var userName;
var hashString = "";
// startGame.addEventListener("click", gameStart);
var press = document.querySelector(".press");
document.addEventListener("DOMContentLoaded", gameStart);
var hint = document.querySelector("#hint");
var letter = document.querySelector("#letter");
var power = document.querySelector("#power");
var quote = document.querySelector(".quote");
var popup = document.querySelector(".popupb");
var alerthead = document.querySelector(".alert");
var words = {
  "An animal": "tiger",
  "Bollywood movie on war": "uri",
  "An outdoor game": "rugby",
  "The more you take, the more you leave behind. What am I?": "footstep",
  "What has a head, a tail, and has no legs?": "coin",
  "Ram father has three sons : Snap, Crackle and _____ ?": "ram",
  "What belongs to you, but other people use it more than you?": "name",
  "What has many keys, but cant even open a single door?": "keyboard",
  "I start with M, end with X, and have a never ending amount of letters. What am I?":
    "mailbox",
  "What begins when things end and ends all things that begin?": "death",
  "What do you call a snowman in summer?": "water",
  "I am born of water but when I return to water, I die. What am I?": "ice"
};
var quotes = [
  "Help..!!",
  "Try something else idiot",
  "You are gonna kill me",
  "i am gonna die",
  "save me please"
];
var quotes_positive = [
  "Impressive",
  "You are genius",
  "Faster",
  "Some more to go"
];

function gameStart() {
  hint_arr = Object.keys(words);
  index = Math.floor(Math.random() * hint_arr.length);
  hint.innerText = `Hint : ${hint_arr[index]}`;
  values_arr = Object.values(words);
  var hash = values_arr[index].length;
  for (var i = 0; i < hash; i++) {
    hashString += "_";
  }
  letter.innerText = hashString;
}

function checkValue() {
  quoteIndex = Math.floor(Math.random() * 4);
  pressed = event.target.innerText;
  target = values_arr[index];
  if (target.includes(pressed.toLowerCase())) {
    target_index = target.indexOf(pressed.toLowerCase());
    hashStringArray = hashString.split("");
    hashStringArray[target_index] = pressed;
    hashString = hashStringArray.join("");
    letter.innerText = hashString;
    event.target.style.visibility = "hidden";
    var checkString = letter.innerText;
    quote.innerText = quotes_positive[quoteIndex];
    quote.style.color = "black";
    quote.style.visibility = "visible";
    setTimeout(function() {
      quote.style.visibility = "hidden";
    }, 1000);
    setTimeout(function() {
      if (!checkString.includes("_")) {
        popup.style.display = "block  ";
        alerthead.innerHTML =
          "You Saved Hangman ..! <span class='red'>You Win Krishna</span>";
      }
    }, 1000);
  } else {
    quoteIndex = Math.floor(Math.random() * 5);
    var powerRem = power.innerText;
    powerArr = powerRem.split(" ");
    powerArr.pop();
    powerRem = powerArr.join(" ");
    power.innerText = powerRem;
    var checkString = power.innerText;
    quote.innerText = quotes[quoteIndex];
    quote.style.color = "red";
    quote.style.visibility = "visible";
    setTimeout(function() {
      quote.style.visibility = "hidden";
    }, 1000);
    setTimeout(function() {
      if (!checkString.includes("|")) {
        popup.style.display = "block  ";
        alerthead.innerHTML =
          "You Killed Hangman ..! <span class='red'>You Lose Krishna</span>";
      }
    }, 1000);
  }
}
// Smooth Scrolling
$(".btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
