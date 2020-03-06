const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    //add border to current tab
    removBorder();
    removShow();
    //add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItems.classList.add('show');
}
function removBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}



//Listen for tab click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

