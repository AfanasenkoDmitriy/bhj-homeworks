
let getHole = (index) => document.getElementById(`hole${index}`);
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let deadMoly = 0;
let lostMoly = 0;

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.classList.contains("hole_has-mole")) {
      deadMoly++;
        dead.textContent = deadMoly;
        if (deadMoly === 10) {
            alert('Вы выиграли')
            deadMoly = 0;
            lostMoly = 0;
            dead.textContent = deadMoly;
            lost.textContent = lostMoly;
        }
    } else {
      lostMoly++;
        lost.textContent = lostMoly;
        if (lostMoly >= 5) {
            alert('Вы проиграли')
            deadMoly = 0;
            lostMoly = 0;
            dead.textContent = deadMoly;
            lost.textContent = lostMoly;
        }
    }
  };
}
