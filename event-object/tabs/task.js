const tabsParrent = document.getElementById('tabs1');
const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll(".tab__content");

function hideTabContent() {
  tabContent.forEach((item) => {
      item.classList.remove("tab__content_active");
  });

  
  tab.forEach((item) => {
    item.classList.remove("tab_active");
  });
}

function showTabContent(i = 0) {
  tabContent[i].classList.add("tab__content_active");
  tab[i].classList.add("tab_active");
}

hideTabContent();
showTabContent();

tabsParrent.addEventListener("click", (event) => {
  const target = event.target; 

  if (target && target.classList.contains("tab")) {
    tab.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});




// tabs.onclick = function (event) {
//     let target = event.target;
    
//     if (!target.classList.contains('tab')) {
//         return;
//     }
//     highlits(target);
// }

// function highlits(tab) {
//     if (selected) {
//         selected.classList.remove("tab_active");
//     }
//     selected = tab;
//     selected.classList.add("tab_active");
// }



