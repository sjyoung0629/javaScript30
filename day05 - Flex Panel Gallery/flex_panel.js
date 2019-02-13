const panels = document.querySelectorAll('.panel');
    
function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // 브라우저마다 flex, flex-grow 로 프로퍼티 이름이 다르므로
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));