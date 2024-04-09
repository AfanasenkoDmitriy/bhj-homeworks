const reveal = document.getElementsByClassName(".reveal");

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();

  if (bottom < 0) {
    return false;
  }
  if (top > window.innerHeight) {
    return false;
  }
  el.classList.add("reveal_active");
  return true;
}
setInterval(() => {
  console.log(isVisible(reveal));
}, 1000);

// document.addEventListener("scroll", (e) => {
//   if (isVisible(reveal)) {
//     e.classList.add("reveal_active");
//   }
// });
