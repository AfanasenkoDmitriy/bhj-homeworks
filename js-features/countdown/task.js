const timerId = setInterval((func) => {
  const timer = document.getElementById("timer");
  timer.textContent--;
  if (timer.textContent <= 0) {
    clearInterval(timerId);
    alert("«Вы победили в конкурсе!»");
  }
}, 1000);
