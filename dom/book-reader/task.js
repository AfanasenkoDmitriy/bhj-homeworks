const book = document.querySelector('.book');
const fontSize = document.querySelectorAll('.font-size')
console.log(fontSize)
fontSize.forEach((e) => {
    e.addEventListener('click', () => {
        if (EventTarget.classList.contains("font-size_small")) {
            book.forEach((s) => {
              s.classList.add("book_fs-small");
          });
        }
    })
})