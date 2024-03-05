const book = document.querySelector(".book");
const fontSize = Array.from(document.querySelectorAll(".font-size"));
let value = "";

fontSize.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();

    const activeElement = fontSize.find((el) =>
      el.classList.contains("font-size_active")
    );

    activeElement.classList.remove("font-size_active");

    elem.classList.add("font-size_active");

    if (elem.hasAttribute("data-size")) {
      value = elem.getAttribute("data-size");
    }

    book.classList.forEach((item) => {
      if (item.startsWith("book_fs-")) {
        book.classList.remove(item);
      } else if (value === "big") {
        book.classList.add("book_fs-big");
      } else {
        book.classList.add("book_fs-small");
      }
    });
  });
});
