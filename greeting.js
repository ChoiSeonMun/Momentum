const greetingForm = document.querySelector(".greeting-form");
const greetingText = greetingForm.querySelector("h1");
const userInput = greetingForm.querySelector("input");

const LS_USER = "UserName";

init();

function init() {
  const userName = localStorage.getItem(LS_USER);
  if (userName) {
    greetingText.innerText = `Hello, ${userName}! How are you today?`;
    userInput.style.display = "none";
  } else {
    greetingForm.addEventListener("submit", registerUser);
  }
}

function registerUser(e) {
  const userName = userInput.value;
  localStorage.setItem(LS_USER, userName);
}
