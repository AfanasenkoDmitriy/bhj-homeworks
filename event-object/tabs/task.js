const tabs = document.getElementById('tabs1');
const tab = Array.from(document.querySelectorAll('.tab'));

let selected;

tabs.onclick = function (event) {
    let target = event.target;
    
    if (!target.classList.contains('tab')) {
        return
    }
    highlits(target);
}

function highlits(tab) {
    if (selected) {
        selected.classList.remove("tab_active");
    }
    selected = tab;
    selected.classList.add("tab_active");
    
}



