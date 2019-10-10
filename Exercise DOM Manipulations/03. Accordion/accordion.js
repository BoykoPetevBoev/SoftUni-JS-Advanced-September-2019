function toggle() {
    const info = document.getElementById('extra');
    const btn = document.querySelector("#accordion > div.head > span");
    if (btn.textContent === 'More') {
        info.style.display = 'block';
        btn.textContent = 'Less';
    }
    else if (btn.textContent === 'Less') {
        info.style.display = 'none';
        btn.textContent = 'More';
    }
}
