const headers = document.querySelectorAll('[data-name="accordeon-title"]');
const showImg = document.querySelectorAll('showImg');

function renderContent () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 32 + "px";
      panel.style.padding = 16 + "px";
    }
}

headers.forEach((item) => {
    item.addEventListener('click', renderContent);
});