const endDate = "20 December 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  diff = (end - now) / 1000;
  if (diff < 0) return;

  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 24;
  input[3].value = Math.floor(diff) % 60;
};

//initial clock
clock();

// 1 day = 24 hr
// 1 hr = 60 mins
// 60 min = 3600 sec

setInterval(() => {
  clock();
}, 1000);
