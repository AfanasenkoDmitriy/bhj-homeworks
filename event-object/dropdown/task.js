let dropdown = document.querySelector(".dropdown__value");

function openAndCloseDropdown() {
  let dropdownList = document.querySelector(".dropdown__list");
  dropdownList.classList.toggle("dropdown__list_active");
}

dropdown.addEventListener("click", openAndCloseDropdown);

let dropdownItem = Array.from(document.querySelectorAll(".dropdown__link"));

dropdownItem.forEach(function (item) {
  item.onclick = function () {
    document.querySelector(".dropdown__value").textContent = item.textContent;
  };
  item.addEventListener("click", openAndCloseDropdown);
});

dropdownItem.forEach(function (element) {
  element.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
