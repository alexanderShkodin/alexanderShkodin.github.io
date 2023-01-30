let date = new Date("feb 20 2023 00:00:00");
function counts() {
  let now = new Date();
  let gap = date - now;
  console.log(gap)
  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minute = Math.floor(gap / 1000 / 60) % 60;
  let second = Math.floor(gap / 1000) % 60;
  console.log(days)

  document.getElementById("d").innerText = days + " дней";
  document.getElementById("h").innerText = hours + " часов";
  document.getElementById("m").innerText = minute + " минут";
  document.getElementById("s").innerText = second + " секунд";
}
counts();
setInterval(counts, 1000);