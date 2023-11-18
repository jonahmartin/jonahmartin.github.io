window.onload = function () {
    setEventListeners();
    //select first tab on load
    document.querySelector(".tab").classList.add("selected");
}

//called from window.onload
//declares all event listeners
function setEventListeners() {
    tabsEventListeners();
}

//add event listeners to all tabs
function tabsEventListeners() {
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", selectTab)
    });
}

//selects tab on click
//also loops through all tabs and remove .selected class
function selectTab(evt) {
    let clickedTab = evt.target;
    let tabs = document.querySelectorAll(".tab");
    let tabContents = document.querySelectorAll(".tabContent");

    for (let i = 0; i < tabs.length; i++) {
        let currentTab = tabs[i];
        if (currentTab.classList.contains("selected")) {
            currentTab.classList.remove("selected");
        }

        //determine which tab content to show
        if (currentTab == clickedTab) {
            tabContents[i].classList.remove("hidden");
        } else if (!tabContents[i].classList.contains("hidden")) {
            tabContents[i].classList.add("hidden");
        }
    }

    clickedTab.classList.add("selected");
}