console.log("security_questions.js loaded");

var securityQuestions = [
  {
    question: "What was your first pet's name?",
    answer: "FlufferNutter"
  },
  {
    question: "Where were you born?",
    answer: "San Francisco"
  },
  {
    question: "What was the type of your first car?",
    answer: "Jeep Grand Cherokee"
  }
]

var firstQuestion = prompt(securityQuestions[0].question);
if (firstQuestion === securityQuestions[0].answer) {
  var secondQuestion = prompt(securityQuestions[1].question);
  if (secondQuestion === securityQuestions[1].answer) {
    var thirdQuestion = prompt(securityQuestions[2].question);
    if (thirdQuestion === securityQuestions[2].answer) {
      console.log("OH HEY DUDE WELCOME BACK");
    } else {
      console.log("SWIPER NO SWIPING");
    }
  } else {
    console.log("SWIPER NO SWIPING");
  }
} else {
  console.log("SWIPER NO SWIPING");
}
