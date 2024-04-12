// Magic 8 Ball program

// html variables
let answerOutputEl = document.getElementById("ballAnswer");

// event listener to image
document.getElementById("magicBall").addEventListener("click", magicBallApp);

function magicBallApp() {
  let randNum = Math.random();
  console.log(randNum);
  let question = document.getElementById("yesNoQuestion").value.toLowerCase();

  if (question === "") {
    answerOutputEl.innerHTML = "Please ask a question...";
  } else if (question === "does the magic 8 ball actually work?") {
    answerOutputEl.innerHTML = "How dare you doubt me!?";
  } else if (question === "is javascript awesome?") {
    answerOutputEl.innerHTML = "of course!";
  } else if (question === "should i name my pet billy or bob?") {
    answerOutputEl.innerHTML = "billy";
  } else if (question === "what is the best newjeans song?") {
    answerOutputEl.innerHTML = "hype boy!";
  } else {
    if (randNum < 0.2) {
      answerOutputEl.innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
      answerOutputEl.innerHTML = "As I see it, yes.";
    } else if (randNum < 0.6) {
      answerOutputEl.innerHTML = "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      answerOutputEl.innerHTML = "Don't count on it";
    } else {
      answerOutputEl.innerHTML = "Output not so good";
    }
  }
}
