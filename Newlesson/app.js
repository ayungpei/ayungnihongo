const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
// const showLogo = document.querySelector("#logo");
// const ayungnihongo = document.querySelector("#ayungnihongo");
// showLogo.addEventListener("mousemove", () => {
//   ayungnihongo.classList.add("move");
// });
// showLogo.addEventListener("mouseout", () => {
//   ayungnihongo.classList.remove("move");
// });
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function setTime() {
  const test = document.querySelector("#test");
  //待解決，如何取HTML的值(2023-12-03)
  let countdownDate = "2023-12-03";
  const countdown = document.querySelector(".time");
  const time = new Date().toISOString().split("T")[0];
  console.log(time);
  let countdownValue = Date;
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value:", countdownValue);
  const now = new Date().getTime();
  const distance = countdownValue - now;

  countdown.innerHTML = parseInt(distance / day);
}
setTime();
