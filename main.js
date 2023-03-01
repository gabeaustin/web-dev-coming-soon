let endDate = new Date("March 26, 2023 23:59").getTime();

let now = new Date().getTime();
let t = endDate - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById("days").innerHTML = days.toString();
document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");

