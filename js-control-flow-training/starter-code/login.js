console.log("login.js loaded");

var userLogin = [userName = "zZissou", userPassword = "password123"];

var login;

while (login !== userPassword) {
  login = prompt("Enter password for " + userName + ".");
  if (login === userPassword) {
  console.log("Welcome back " + userName + "!");
  } else {
    console.log("IMPOSTER");
  }
}
