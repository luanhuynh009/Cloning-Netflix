const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem))

//Select tab content item
function selectItem(e) {
    removeBorder();
    addHide();
    //Add border to current tab
    this.classList.add("tab-border");
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.remove('hide');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function addHide() {
    tabContentItems.forEach(item => item.classList.add('hide'));
}