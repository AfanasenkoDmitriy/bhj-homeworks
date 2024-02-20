"use strict";
const rotator = Array.from(document.querySelectorAll(".rotator__case"));

let count = 1;

const rotation = function () {
  rotator.forEach(function (elem, index) {
    elem.classList.toggle("rotator__case_active", count == index);
  });

  count++;
  if (count >= rotator.length) {
    count = 0;
  }
};

setInterval(rotation, 1000);
