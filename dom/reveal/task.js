const reveal = Array.from(document.getElementsByClassName("reveal"));

reveal.forEach((e) => {
  document.addEventListener("scroll", (el) => {
    if (isVisible(...reveal)) {
      e.classList.add("reveal_active");
    }
  });
});
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
