const addText = function () {
  const status = document.getElementById("timer");
  status.textContent--;
  if (status.textContent <= 0) {
    alert("«Вы победили в конкурсе!»");
  }
};

setInterval(addText, 1000);
